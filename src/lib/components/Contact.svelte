<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { env } from '$env/dynamic/public';
	import { profile, socials } from '$lib/data/portfolio';
	import Icon from './Icon.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

	const accessKey = env.PUBLIC_WEB3FORMS_ACCESS_KEY;

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		if (!accessKey) {
			status = 'error';
			return;
		}

		status = 'sending';
		try {
			// FormData (not JSON) avoids a CORS preflight — Web3Forms doesn't return
			// Access-Control-Allow-Origin on the OPTIONS preflight a JSON content-type
			// would trigger, which silently blocks the request client-side entirely.
			const form = new FormData();
			form.set('access_key', accessKey);
			form.set('subject', `Portfolio contact from ${name || 'a visitor'}`);
			form.set('name', name);
			form.set('email', email);
			form.set('message', message);

			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: form
			});
			const data = await res.json();
			if (!res.ok || !data.success) throw new Error(data.message ?? 'Submission failed');

			status = 'sent';
			name = '';
			email = '';
			message = '';
		} catch {
			status = 'error';
		}
	}
</script>

<section id="contact" class="mx-auto max-w-4xl px-6 py-28">
	<div use:reveal class="text-center">
		<p class="text-sm font-semibold tracking-widest text-brand-500 uppercase">Contact</p>
		<h2 class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
			Let's build something great
		</h2>
		<p class="mt-4 text-ink/60 dark:text-paper/60">
			Have a project in mind or just want to say hi? My inbox is open.
		</p>
	</div>

	<form
		use:reveal={{ delay: 120 }}
		onsubmit={submit}
		class="mx-auto mt-12 grid max-w-xl gap-5 rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.03]"
	>
		<div class="grid gap-5 sm:grid-cols-2">
			<label class="text-sm">
				<span class="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">Name</span>
				<input
					required
					bind:value={name}
					placeholder="Jane Doe"
					class="w-full rounded-xl border border-black/10 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-white/10"
				/>
			</label>
			<label class="text-sm">
				<span class="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">Email</span>
				<input
					required
					type="email"
					bind:value={email}
					placeholder="jane@email.com"
					class="w-full rounded-xl border border-black/10 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-white/10"
				/>
			</label>
		</div>

		<label class="text-sm">
			<span class="mb-1.5 block font-medium text-ink/70 dark:text-paper/70">Message</span>
			<textarea
				required
				rows="4"
				bind:value={message}
				placeholder="Tell me about your project..."
				class="w-full resize-none rounded-xl border border-black/10 bg-transparent px-4 py-2.5 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-white/10"
			></textarea>
		</label>

		<!-- honeypot: hidden from real visitors, bots tend to fill every field -->
		<input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

		<button
			type="submit"
			disabled={status === 'sending'}
			class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:scale-[1.02] active:scale-95 disabled:pointer-events-none disabled:opacity-60 dark:bg-paper dark:text-ink"
		>
			<span
				class="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-500 group-hover:translate-x-0"
			></span>
			<span class="relative">
				{#if status === 'sending'}
					Sending…
				{:else}
					Send message
				{/if}
			</span>
		</button>

		{#if status === 'sent'}
			<p class="text-center text-sm text-brand-600 dark:text-brand-300">
				Thanks! Your message has been sent.
			</p>
		{:else if status === 'error'}
			<p class="text-center text-sm text-red-500">
				Something went wrong — try again, or email me directly at
				<a href="mailto:{profile.email}" class="underline">{profile.email}</a>.
			</p>
		{/if}
	</form>

	<div use:reveal={{ delay: 220 }} class="mt-12 flex justify-center gap-4">
		{#each socials as social (social.label)}
			<a
				href={social.href}
				target="_blank"
				rel="noreferrer"
				aria-label={social.label}
				class="grid size-11 place-items-center rounded-full border border-black/10 text-ink/60 transition hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-paper/60 dark:hover:text-brand-300"
			>
				<Icon name={social.icon} class="size-4.5" />
			</a>
		{/each}
	</div>
</section>
