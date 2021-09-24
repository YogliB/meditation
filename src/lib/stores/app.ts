import { writable } from 'svelte/store';

export type AppState = {
	isDarkMode: boolean;
	isInSession: boolean;
	isMeditating: boolean;
	shouldPlaySound: boolean;
};

export const appState = writable<AppState>({
	isDarkMode: false,
	isMeditating: false,
	isInSession: false,
	shouldPlaySound: true,
});

export function toggleDarkMode(): void {
	appState.update((state) => ({
		...state,
		isDarkMode: !state.isDarkMode,
	}));
}

export function setInSession(isInSession: boolean): void {
	appState.update((state) => ({
		...state,
		isInSession,
	}));
}

export function toggleMeditating(): void {
	appState.update((state) => ({
		...state,
		isMeditating: !state.isMeditating,
	}));
}

export function toggleSound(): void {
	appState.update((state) => ({
		...state,
		shouldPlaySound: !state.shouldPlaySound,
	}));
}
