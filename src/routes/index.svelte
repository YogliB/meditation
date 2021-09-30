<script lang="ts">
	import { Timer } from '$lib/components/organisms';
	import { updateTimerState } from '$lib/stores';
</script>

<Timer on:stateChange={(event) => updateTimerState(event.detail)} />
