<script lang="ts">
	import { format } from 'date-fns';
	import { Button } from '$lib/components/atoms';
	import is from 'date-fns/locale/is';

	let rawTimer = new Date();
	let interval: NodeJS.Timeout;
	let minutes = 5;
	let isActive = false;

	resetTimer();

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

	function stopTimer() {
		isActive = false;
		clearInterval(interval);
	}

	function resetTimer() {
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

	$: displayTimer = format(rawTimer, 'mm:ss');
</script>

<div class="h-full flex flex-col justify-center items-center gap-4">
	<Button on:click={addMinutes} icon="fas fa-plus" />

	<h3 class="text-6xl">
		{displayTimer}
	</h3>

	<Button on:click={subtractMinutes} icon="fas fa-minus" />

	<div class="flex items-center gap-4">
		{#if !isActive}
			<Button
				on:click={startTimer}
				color="success"
				icon="fas fa-play"
				disabled={isActive}
				size="large"
				isRounded
			/>
		{/if}

		{#if isActive}
			<Button
				on:click={stopTimer}
				color="warning"
				icon="fas fa-pause"
				disabled={!isActive}
				size="large"
				isRounded
			/>
		{/if}

		<Button on:click={resetTimer} color="danger" icon="fas fa-stop" />
	</div>
</div>
