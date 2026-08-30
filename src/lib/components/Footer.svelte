<script lang="ts">
	import { profile } from '$lib/data/portfolio';
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-black/5 py-8 dark:border-white/10">
	<div class="mx-auto max-w-6xl px-6 text-center text-sm text-ink/60 dark:text-paper/60">
		<p>© {year} {profile.name}. All rights reserved.</p>
	</div>
</footer>
