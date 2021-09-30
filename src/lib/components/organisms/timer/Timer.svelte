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
	import { fade } from 'svelte/transition';
	import { onMount, createEventDispatcher } from 'svelte';
	import TimerWorker from './timer-worker?worker&inline';
	import type { TimerState } from '$lib/types';

	const dispatcher = createEventDispatcher<{ stateChange: TimerState }>();

	export let minutes = 5;

	let isInSession = false;
	let isMeditating = false;
	let rawTimer = new Date();
	let startSound: HTMLAudioElement;
	let endSound: HTMLAudioElement;
	let worker: Worker;

	resetTimer();

	onMount(() => {
		startSound = new Audio('/sounds/start.ogg');
		endSound = new Audio('/sounds/end.ogg');
		worker = new TimerWorker();

		worker.onmessage = ({ data }) => {
			const { action, payload } = data;

			switch (action) {
				case 'tick':
					rawTimer = new Date(payload.rawTimer);
					break;
				case 'start':
					playStartSound();
					break;
				case 'end':
					dispatcher('stateChange', 'off');
					playEndSound();
					resetTimer();
					break;
			}
		};
	});

	function startTimer() {
		dispatcher('stateChange', 'meditating');
		isInSession = isMeditating = true;
		worker.postMessage({ action: 'start', payload: { rawTimer, minutes } });
	}

	function pauseTimer() {
		dispatcher('stateChange', 'inSession');
		worker.postMessage({ action: 'pause' });
		isMeditating = false;
	}

	function stopTimer() {
		dispatcher('stateChange', 'off');
		worker.postMessage({ action: 'stop' });
		resetTimer();
	}

	function resetTimer() {
		isInSession = isMeditating = false;
		rawTimer.setHours(0);
		rawTimer.setMinutes(minutes);
		rawTimer.setSeconds(5);
		refreshDisplay();
	}

	function addMinutes() {
		if (minutes === 60) return;

		minutes += 5;
		rawTimer.setMinutes(rawTimer.getMinutes() + 5);
		refreshDisplay();
	}

	function subtractMinutes() {
		if (isInSession || isMeditating || minutes === 5) return;

		minutes -= 5;
		rawTimer.setMinutes(rawTimer.getMinutes() - 5);
		refreshDisplay();
	}

	function refreshDisplay() {
		rawTimer = new Date(rawTimer);
	}

	function playStartSound() {
		startSound.play();
	}

	function playEndSound() {
		endSound.play();
	}

	$: displayTimer =
		rawTimer.getHours() === 1
			? `60:${format(rawTimer, 'ss')}`
			: format(rawTimer, 'mm:ss');
</script>

<div class="h-full flex flex-col justify-center items-center gap-4">
	{#if !isMeditating}
		<div in:fade out:fade>
			<Button
				on:click={addMinutes}
				icon={faPlus}
				disabled={minutes === 60}
				label="Add 5 minutes"
				hideLabel={true}
			/>
		</div>
	{/if}

	<div class="text-7xl">
		{displayTimer}
	</div>

	{#if !isMeditating}
		<div in:fade out:fade>
			<Button
				on:click={subtractMinutes}
				icon={faMinus}
				disabled={minutes === 5}
				label="Subtract 5 minutes"
				hideLabel={true}
			/>
		</div>
	{/if}

	<div class="flex items-center gap-4">
		{#if !isMeditating}
			<Button
				on:click={startTimer}
				color="success"
				icon={faPlay}
				size="large"
				isRounded
				label="Start timer"
				hideLabel={true}
			/>
		{/if}

		{#if isMeditating}
			<Button
				on:click={pauseTimer}
				color="warning"
				icon={faPause}
				size="large"
				isRounded
				label="Pause timer"
				hideLabel={true}
			/>
		{/if}

		{#if isInSession || (minutes !== 60 && rawTimer.getMinutes() !== minutes)}
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
