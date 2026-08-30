<script lang="ts">
	import Icon from './Icon.svelte';

	let visible = $state(false);

	$effect(() => {
		const onScroll = () => (visible = window.scrollY > 500);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

{#if visible}
	<a
		href="#top"
		aria-label="Back to top"
		class="fixed right-6 bottom-6 z-40 grid size-11 place-items-center rounded-full bg-ink text-paper shadow-xl transition hover:-translate-y-1 hover:scale-105 active:scale-95 dark:bg-paper dark:text-ink"
		style="animation: fade-up 0.4s cubic-bezier(0.16,1,0.3,1) both"
	>
		<Icon name="arrow-up" class="size-4.5" />
	</a>
{/if}
