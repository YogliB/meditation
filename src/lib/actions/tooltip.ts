import tippy from 'tippy.js';
import type { Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const tooltip = (
	node: HTMLElement,
	options: Partial<Props>
): SvelteActionReturnType => {
	if (!options?.content) return;

	const ref = tippy(node, options);

	return {
		update(newOptions: Partial<Props>) {
			ref.setProps(newOptions);
		},
		destroy() {
			ref.destroy();
		},
	};
};
