<script lang="ts">
	import { fly } from 'svelte/transition';
	import { navLinks, profile } from '$lib/data/portfolio';
	import Icon from './Icon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);
	let activeHref = $state('#about');
	let hoveredHref = $state<string | null>(null);

	let navListEl: HTMLUListElement | null = $state(null);
	let linkEls: Record<string, HTMLAnchorElement> = $state({});
	let pill = $state({ left: 0, width: 0, opacity: 0 });

	function updatePill(href: string) {
		const el = linkEls[href];
		const list = navListEl;
		if (!el || !list) return;
		const elRect = el.getBoundingClientRect();
		const listRect = list.getBoundingClientRect();
		pill = { left: elRect.left - listRect.left, width: elRect.width, opacity: 1 };
	}

	$effect(() => {
		const target = hoveredHref ?? activeHref;
		updatePill(target);
	});

	$effect(() => {
		const onResize = () => updatePill(hoveredHref ?? activeHref);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		const sections = navLinks
			.map((l) => document.querySelector<HTMLElement>(l.href))
			.filter((el): el is HTMLElement => !!el);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeHref = `#${entry.target.id}`;
				}
			},
			{ rootMargin: '-40% 0px -50% 0px', threshold: 0 }
		);
		sections.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	});

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-50 transition-colors duration-300 {scrolled
		? 'border-b border-black/5 bg-white/70 backdrop-blur-lg dark:border-white/5 dark:bg-ink/60'
		: ''}"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a
			href="#top"
			class="group font-display text-lg font-semibold tracking-tight transition hover:text-brand-500"
		>
			<span class="inline-block transition-transform duration-300 group-hover:-rotate-6"
				>{profile.initials}</span
			><span class="text-brand-500">.</span>
		</a>

		<ul
			bind:this={navListEl}
			onmouseleave={() => (hoveredHref = null)}
			class="relative hidden items-center gap-1 md:flex"
		>
			<span
				class="pointer-events-none absolute top-1/2 h-8 -translate-y-1/2 rounded-full bg-brand-50 transition-[left,width,opacity] duration-300 ease-out dark:bg-white/[0.06]"
				style="left: {pill.left}px; width: {pill.width}px; opacity: {pill.opacity}"
			></span>
			{#each navLinks as link (link.href)}
				<li>
					<a
						bind:this={linkEls[link.href]}
						onmouseenter={() => (hoveredHref = link.href)}
						href={link.href}
						class="relative block px-4 py-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink dark:text-paper/70 dark:hover:text-paper"
						class:text-brand-600={activeHref === link.href}
						class:dark:text-brand-300={activeHref === link.href}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3">
			<ThemeToggle />
			<button
				class="grid size-10 place-items-center rounded-full border border-black/10 md:hidden dark:border-white/10"
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<Icon name={menuOpen ? 'x' : 'menu'} class="size-4.5" />
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<ul
			class="mx-6 mb-4 flex flex-col gap-1 overflow-hidden rounded-2xl border border-black/5 bg-white/90 p-3 shadow-xl backdrop-blur-lg md:hidden dark:border-white/10 dark:bg-ink/90"
		>
			{#each navLinks as link, i (link.href)}
				<li in:fly={{ x: -16, duration: 300, delay: i * 50 }}>
					<a
						href={link.href}
						onclick={closeMenu}
						class="relative flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition {activeHref ===
						link.href
							? 'bg-brand-50 text-brand-600 dark:bg-white/5 dark:text-brand-300'
							: 'text-ink/80 hover:bg-brand-50 hover:text-brand-600 dark:text-paper/80 dark:hover:bg-white/5'}"
					>
						{link.label}
						{#if activeHref === link.href}
							<span class="size-1.5 rounded-full bg-brand-500"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
