<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { profile } from '$lib/data/portfolio';

	let tiltStyle = $state('');

	function onMove(e: MouseEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		tiltStyle = `transform: perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
	}

	function onLeave() {
		tiltStyle = 'transform: perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)';
	}
</script>

<section id="about" class="mx-auto max-w-6xl px-6 py-28">
	<div class="grid items-center gap-14 md:grid-cols-2">
		<div use:reveal class="mx-auto w-full max-w-sm">
			<div
				role="presentation"
				onmousemove={onMove}
				onmouseleave={onLeave}
				style={tiltStyle}
				class="relative aspect-square rounded-[2rem] bg-gradient-to-br {profile.avatarGradient} p-1 shadow-2xl shadow-brand-500/20 transition-transform duration-300 ease-out"
			>
				<div class="size-full overflow-hidden rounded-[1.85rem] bg-paper/95 dark:bg-ink/90">
					<img
						src="/images/avatar.jpg"
						alt={profile.name}
						width="400"
						height="400"
						loading="lazy"
						decoding="async"
						class="size-full object-cover"
					/>
				</div>
				<div
					class="absolute -bottom-4 -left-4 rounded-2xl border border-black/5 bg-white px-4 py-2 text-xs font-semibold shadow-lg dark:border-white/10 dark:bg-ink"
				>
					{profile.location}
				</div>
			</div>
		</div>

		<div use:reveal={{ delay: 120 }}>
			<p class="text-sm font-semibold tracking-widest text-brand-500 uppercase">About me</p>
			<h2 class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
				Turning ideas into <span
					class="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent"
					>polished products</span
				>
			</h2>
			<p class="mt-6 text-ink/65 dark:text-paper/65">
				I'm a self-taught developer — everything I know came from reading docs and building real
				projects, not a classroom. I care about performance, accessibility, and the small
				interaction details that make a product feel alive. When I'm not shipping features, I'm
				digging into a new stack's documentation or refining this very site.
			</p>
		</div>
	</div>
</section>
