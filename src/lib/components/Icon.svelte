<script lang="ts">
	let { name, class: className = 'size-5' }: { name: string; class?: string } = $props();
</script>

{#if name === 'github'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={className} aria-hidden="true">
		<path
			d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55 4.51-1.5 7.77-5.76 7.77-10.78C23.25 5.48 18.27.5 12 .5Z"
		/>
	</svg>
{:else if name === 'linkedin'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={className} aria-hidden="true">
		<path
			d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
		/>
	</svg>
{:else if name === 'twitter'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={className} aria-hidden="true">
		<path
			d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.59-6.64 7.59H.46l8.6-9.83L0 1.5h7.6l5.24 6.93L18.9 1.5Zm-1.29 18.8h2.04L6.48 3.6H4.29l13.32 16.7Z"
		/>
	</svg>
{:else if name === 'mail'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
		<path d="m3.5 6 8.5 7 8.5-7" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if name === 'external-link'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<path d="M14 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 14 20 4" stroke-linecap="round" stroke-linejoin="round" />
		<path
			d="M18 13.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5h5.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'menu'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" stroke-linecap="round" />
	</svg>
{:else if name === 'x'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<path d="M5 5l14 14M19 5 5 19" stroke-linecap="round" />
	</svg>
{:else if name === 'sun'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<circle cx="12" cy="12" r="4.2" />
		<path
			d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
			stroke-linecap="round"
		/>
	</svg>
{:else if name === 'moon'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={className} aria-hidden="true">
		<path
			d="M20.7 14.8A8.6 8.6 0 0 1 9.2 3.3a.6.6 0 0 0-.75-.8A9.6 9.6 0 1 0 21.5 15.5a.6.6 0 0 0-.8-.7Z"
		/>
	</svg>
{:else if name === 'arrow-down'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<path d="M12 4v16M5 13l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if name === 'arrow-up'}
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class={className} aria-hidden="true">
		<path d="M12 20V4M5 11l7-7 7 7" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if name === 'sparkle'}
	<svg viewBox="0 0 24 24" fill="currentColor" class={className} aria-hidden="true">
		<path
			d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"
		/>
	</svg>
{/if}
