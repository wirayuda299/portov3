<script lang="ts">
	import Icon from './Icon.svelte';

	let dark = $state(false);

	$effect(() => {
		dark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}
</script>

<button
	onclick={toggle}
	aria-label="Toggle color theme"
	class="relative grid size-10 place-items-center rounded-full border border-black/10 bg-white/70 text-ink transition hover:scale-110 hover:border-brand-400 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-paper"
>
	<span class="transition-transform duration-500" class:rotate-180={dark}>
		{#if dark}
			<Icon name="moon" class="size-4.5" />
		{:else}
			<Icon name="sun" class="size-4.5" />
		{/if}
	</span>
</button>
