<script lang="ts">
	import { format } from 'date-fns';
	import { Button } from '$lib/components/molecules';
	import {
		faPlus,
		faMinus,
		faPlay,
		faPause,
		faStop,
	} from '@fortawesome/free-solid-svg-icons';
	import { setInSession, toggleMeditating } from '$lib/stores';

	let rawTimer = new Date();
	let interval: NodeJS.Timeout;
	let minutes = 5;
	let isActive = false;

	resetTimer();

	function startTimer() {
		toggleMeditating();
		setInSession(true);

		isActive = true;
		interval = setInterval(() => {
			rawTimer.setSeconds(rawTimer.getSeconds() - 1);
			refreshDisplay();

			if (rawTimer.getSeconds() === 0 && rawTimer.getMinutes() === 0) {
				playAudio();
				setInSession(false);
				toggleMeditating();
				resetTimer();
				return;
			}
		}, 1000);
	}

	function pauseTimer() {
		toggleMeditating();
		isActive = false;
		clearInterval(interval);
	}

	function stopTimer() {
		setInSession(false);
		toggleMeditating();
		resetTimer();
	}

	function resetTimer() {
		isActive = false;
		interval && clearInterval(interval);
		rawTimer.setHours(0);
		rawTimer.setMinutes(minutes);
		rawTimer.setSeconds(0);
		refreshDisplay();
	}

	function addMinutes() {
		if (minutes === 60) return;

		minutes += 5;
		rawTimer.setMinutes(rawTimer.getMinutes() + 5);
		refreshDisplay();
	}

	function subtractMinutes() {
		if (isActive || minutes === 5) return;

		minutes -= 5;
		rawTimer.setMinutes(rawTimer.getMinutes() - 5);
		refreshDisplay();
	}

	function refreshDisplay() {
		rawTimer = new Date(rawTimer);
	}

	function playAudio() {
		const audio = new Audio('/assets/sounds/1.ogg');
		audio.play();
	}

	$: displayTimer =
		rawTimer.getHours() === 1 ? '60:00' : format(rawTimer, 'mm:ss');
</script>

<div class="h-full flex flex-col justify-center items-center gap-4">
	<Button
		on:click={addMinutes}
		icon={faPlus}
		disabled={minutes === 60}
		label="Add 5 minutes"
		hideLabel={true}
	/>

	<div class="text-7xl">
		{displayTimer}
	</div>

	<Button
		on:click={subtractMinutes}
		icon={faMinus}
		disabled={minutes === 5}
		label="Subtract 5 minutes"
		hideLabel={true}
	/>

	<div class="flex items-center gap-4">
		{#if !isActive}
			<Button
				on:click={startTimer}
				color="success"
				icon={faPlay}
				disabled={isActive}
				size="large"
				isRounded
				label="Start timer"
				hideLabel={true}
			/>
		{/if}

		{#if isActive}
			<Button
				on:click={pauseTimer}
				color="warning"
				icon={faPause}
				disabled={!isActive}
				size="large"
				isRounded
				label="Pause timer"
				hideLabel={true}
			/>
		{/if}

		{#if isActive || (minutes !== 60 && rawTimer.getMinutes() !== minutes)}
			<Button
				on:click={stopTimer}
				color="danger"
				icon={faStop}
				size="large"
				isRounded
				label="Stop timer"
				hideLabel={true}
			/>
		{/if}
	</div>
</div>
