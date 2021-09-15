<script lang="ts">
	import { format } from 'date-fns';
	import { Button } from '$lib/components/atoms';
	import {
		faPlus,
		faMinus,
		faPlay,
		faPause,
		faStop,
	} from '@fortawesome/free-solid-svg-icons';

	let rawTimer = new Date();
	let interval: NodeJS.Timeout;
	let minutes = 5;
	let isActive = false;

	stopTimer();

	function startTimer() {
		isActive = true;
		interval = setInterval(() => {
			rawTimer.setSeconds(rawTimer.getSeconds() - 1);
			refreshDisplay();
			if (rawTimer.getSeconds() === 0 && rawTimer.getMinutes() === 0) {
				clearInterval(interval);
				return;
			}
		}, 1000);
	}

	function pauseTimer() {
		isActive = false;
		clearInterval(interval);
	}

	function stopTimer() {
		isActive = false;
		interval && clearInterval(interval);
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
		rawTimer.getMinutes() === 0 ? '60:00' : format(rawTimer, 'mm:ss');
</script>

<div class="h-full flex flex-col justify-center items-center gap-4">
	<Button on:click={addMinutes} icon={faPlus} disabled={minutes === 60} />

	<h3 class="text-7xl">
		{displayTimer}
	</h3>

	<Button
		on:click={subtractMinutes}
		icon={faMinus}
		disabled={minutes === 5}
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
			/>
		{/if}

		{#if isActive || rawTimer.getMinutes() !== minutes}
			<Button
				on:click={stopTimer}
				color="danger"
				icon={faStop}
				size="large"
				isRounded
			/>
		{/if}
	</div>
</div>
