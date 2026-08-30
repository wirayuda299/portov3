<script lang="ts">
	import About from '$lib/components/About.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { profile, siteUrl, socials } from '$lib/data/portfolio';

	const title = `${profile.name} — Full-Stack Developer`;
	const description = `Portfolio of ${profile.name}, a self-taught full-stack developer building fast, accessible web products.`;
	const ogImage = `${siteUrl}/images/avatar.jpg`;
	const github = socials.find((s) => s.label === 'GitHub')?.href;
	const linkedin = socials.find((s) => s.label === 'LinkedIn')?.href;

	const personJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		url: siteUrl,
		image: ogImage,
		jobTitle: 'Full-Stack Developer',
		email: profile.email,
		sameAs: [github, linkedin].filter(Boolean)
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={siteUrl} />
	<meta name="theme-color" content="#0a0a0f" media="(prefers-color-scheme: dark)" />
	<meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={profile.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{@html `<script type="application/ld+json">${JSON.stringify(personJsonLd).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<a
	href="#main-content"
	class="sr-only z-[100] rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4 dark:bg-paper dark:text-ink"
>
	Skip to content
</a>

<div
	class="pointer-events-none fixed inset-0 -z-10 [background-image:radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:26px_26px] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]"
></div>

<Nav />

<main id="main-content">
	<Hero />
	<About />
	<Skills />
	<Projects />
	<Contact />
</main>

<Footer />
<BackToTop />
