import type { Action } from 'svelte/action';

interface RevealOptions {
	delay?: number;
	threshold?: number;
}

/** Toggles `.in-view` on an element once it scrolls into the viewport. Pairs with the
 * `[data-reveal]` base styles in layout.css. */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const { delay = 0, threshold = 0.15 } = options ?? {};

	node.setAttribute('data-reveal', '');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const el = entry.target as HTMLElement;
					el.classList.add('in-view');
					observer.unobserve(el);
					// clear the entrance stagger delay once revealed so it doesn't also
					// delay this element's own hover transitions afterward
					if (delay) {
						el.addEventListener(
							'transitionend',
							() => {
								el.style.transitionDelay = '';
							},
							{ once: true }
						);
					}
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
