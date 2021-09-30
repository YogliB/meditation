import { writable } from 'svelte/store';

export type AppState = {
	isDarkMode: boolean;
	shouldPlaySound: boolean;
	timerState: 'meditating' | 'inSession' | 'off';
};

export const appState = writable<AppState>({
	isDarkMode: false,
	shouldPlaySound: true,
	timerState: 'off',
});

export function toggleDarkMode(): void {
	appState.update((state) => ({
		...state,
		isDarkMode: !state.isDarkMode,
	}));
}

export function toggleSound(): void {
	appState.update((state) => ({
		...state,
		shouldPlaySound: !state.shouldPlaySound,
	}));
}

export function updateTimerState(
	timerState: 'meditating' | 'inSession' | 'off'
): void {
	appState.update((state) => ({
		...state,
		timerState,
	}));
}
