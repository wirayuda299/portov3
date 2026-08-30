<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { skillGroups } from '$lib/data/portfolio';
</script>

<section id="skills" class="relative py-28">
	<div class="mx-auto max-w-6xl px-6">
		<div use:reveal class="mx-auto max-w-xl text-center">
			<p class="text-sm font-semibold tracking-widest text-brand-500 uppercase">Skills</p>
			<h2 class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
				What I work with
			</h2>
			<p class="mt-4 text-ink/60 dark:text-paper/60">
				A toolkit built for shipping fast without cutting corners.
			</p>
		</div>

		<div class="mt-16 grid gap-6 md:grid-cols-3">
			{#each skillGroups as group, gi (group.title)}
				<div
					use:reveal={{ delay: gi * 120 }}
					class="rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03]"
				>
					<h3 class="font-display text-lg font-semibold">{group.title}</h3>
					<div class="mt-5 flex flex-wrap gap-2.5">
						{#each group.skills as skill, si (skill)}
							<span
								use:reveal={{ delay: gi * 120 + si * 40 }}
								class="inline-flex items-center rounded-full border border-brand-400/20 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:border-brand-400/60 hover:bg-brand-100 hover:shadow-md hover:shadow-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-brand-300 dark:hover:bg-white/10"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
