/// <reference lib="webworker" />

let interval: NodeJS.Timeout;
let rawTimer: Date;
let minutes: number;

onmessage = ({ data }: MessageEvent) => {
	const { action, payload } = data;

	switch (action) {
		case 'start':
			rawTimer = new Date(payload.rawTimer);
			minutes = payload.minutes;
			startTimer();
			break;
		case 'pause':
			clearInterval(interval);
			break;
		case 'stop':
			clearInterval(interval);
	}
};

function startTimer() {
	interval = setInterval(() => {
		rawTimer.setSeconds(rawTimer.getSeconds() - 1);
		postMessage({
			action: 'tick',
			payload: { rawTimer },
		});

		if (rawTimer.getSeconds() === 0 && rawTimer.getMinutes() === minutes) {
			postMessage({ action: 'start' });
		}

		if (rawTimer.getSeconds() === 0 && rawTimer.getMinutes() === 0) {
			clearInterval(interval);
			postMessage({ action: 'end' });
		}
	}, 1000);
}

export {};
