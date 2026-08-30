<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { projects } from '$lib/data/portfolio';
	import Icon from './Icon.svelte';

	function onMove(e: MouseEvent) {
		const card = e.currentTarget as HTMLElement;
		const rect = card.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
		const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
		card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
	}

	function onLeave(e: MouseEvent) {
		(e.currentTarget as HTMLElement).style.transform =
			'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
	}
</script>

<section id="projects" class="mx-auto max-w-6xl px-6 py-28">
	<div use:reveal class="mx-auto max-w-xl text-center">
		<p class="text-sm font-semibold tracking-widest text-brand-500 uppercase">Projects</p>
		<h2 class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Selected work</h2>
		<p class="mt-4 text-ink/60 dark:text-paper/60">A few projects I've enjoyed building.</p>
	</div>

	<div class="mt-16 grid gap-8 sm:grid-cols-2">
		{#each projects as project, i (project.title)}
			<article
				use:reveal={{ delay: (i % 2) * 100 }}
				onmousemove={onMove}
				onmouseleave={onLeave}
				class="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-2xl hover:shadow-brand-500/15 dark:border-white/10 dark:bg-white/[0.03]"
			>
				<div class="relative h-44 overflow-hidden bg-gradient-to-br {project.gradient}">
					<img
						src={project.thumbnail}
						alt="{project.title} preview"
						width="378"
						height="252"
						loading="lazy"
						decoding="async"
						class="size-full object-cover transition duration-500 group-hover:scale-105"
					/>
					<div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent"
					></div>
					<span
						class="absolute right-5 bottom-4 font-display text-4xl font-bold text-white/70 drop-shadow transition group-hover:text-white/90"
					>
						0{i + 1}
					</span>
				</div>

				<div class="p-7">
					<h3 class="font-display text-xl font-semibold">{project.title}</h3>
					<p class="mt-2 text-sm text-ink/60 dark:text-paper/60">{project.description}</p>

					<div class="mt-4 flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<span
								class="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-white/5 dark:text-brand-300"
							>
								{tag}
							</span>
						{/each}
					</div>

					<div class="mt-6 flex items-center gap-4 text-sm font-semibold">
						{#if project.href !== project.repo}
							<a
								href={project.href}
								target="_blank"
								rel="noreferrer"
								class="inline-flex items-center gap-1.5 text-brand-600 transition hover:gap-2.5 dark:text-brand-300"
							>
								Live demo <Icon name="external-link" class="size-3.5" />
							</a>
						{/if}
						<a
							href={project.repo}
							target="_blank"
							rel="noreferrer"
							class="inline-flex items-center gap-1.5 text-ink/60 transition hover:text-ink dark:text-paper/60 dark:hover:text-paper"
						>
							Source <Icon name="github" class="size-3.5" />
						</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
