<script lang="ts">
   import { profile, socials } from "$lib/data/portfolio";
   import Icon from "./Icon.svelte";
</script>

<section
   id="top"
   class="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20"
>
   <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black,black_65%,transparent)]"
   >
      <div
         class="absolute -top-24 -left-24 size-96 rounded-full bg-brand-400/30 blur-3xl dark:bg-brand-600/25"
      ></div>
      <div
         class="absolute top-1/3 -right-24 size-[28rem] rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/15"
      ></div>
      <div
         class="absolute bottom-0 left-1/3 size-80 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-800/20"
      ></div>
   </div>

   <!-- floating decorative shapes -->
   <div
      class="pointer-events-none absolute top-28 right-[8%] hidden size-14 rounded-2xl border border-brand-400/40 backdrop-blur-sm md:block"
   ></div>
   <div
      class="pointer-events-none absolute bottom-24 left-[6%] hidden size-10 rounded-full bg-accent-400/50 md:block"
   ></div>
   <Icon
      name="sparkle"
      class="pointer-events-none absolute top-1/2 right-[18%] hidden size-6 text-brand-400/70 lg:block"
   />

   <div class="mx-auto w-full max-w-6xl px-6">
      <p
         class="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-50 px-4 py-1.5 text-xs font-medium text-brand-700 dark:border-brand-400/20 dark:bg-white/5 dark:text-brand-300"
         style="animation-delay: 0ms"
      >
         <span class="relative flex size-2">
            <span class="relative inline-flex size-2 rounded-full bg-brand-500"
            ></span>
         </span>
         Available for new opportunities
      </p>

      <h1
         class="hero-in font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
         style="animation-delay: 80ms"
      >
         Hi, I'm <span
            class="bg-linear-to-r from-brand-500 via-accent-500 to-brand-600 bg-clip-text text-transparent"
            >{profile.name}</span
         >
      </h1>

      <div
         class="hero-in relative mt-4 h-8 font-display text-2xl font-medium text-ink/70 sm:h-9 sm:text-3xl dark:text-paper/70"
         style="animation-delay: 160ms"
      >
         {profile.roles[0]}
      </div>

      <p
         class="hero-in mt-6 max-w-xl text-lg text-ink/60 dark:text-paper/60"
         style="animation-delay: 240ms"
      >
         {profile.tagline}
      </p>

      <div
         class="hero-in mt-9 flex flex-wrap items-center gap-4"
         style="animation-delay: 320ms"
      >
         <a
            href="#projects"
            class="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:scale-105 active:scale-95 dark:bg-paper dark:text-ink"
         >
            <span
               class="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-500 group-hover:translate-x-0"
            ></span>
            <span class="relative">View my work</span>
         </a>
         <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition hover:scale-105 hover:border-brand-400 hover:text-brand-600 active:scale-95 dark:border-white/15 dark:hover:text-brand-300"
         >
            Get in touch
         </a>
      </div>

      <div class="hero-in mt-10 flex items-center gap-4" style="animation-delay: 400ms">
         {#each socials as social (social.label)}
            <a
               href={social.href}
               target="_blank"
               rel="noreferrer"
               aria-label={social.label}
               class="grid size-10 place-items-center rounded-full border border-black/10 text-ink/60 transition hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-paper/60 dark:hover:text-brand-300"
            >
               <Icon name={social.icon} class="size-4.5" />
            </a>
         {/each}
      </div>
   </div>

   <a
      href="#about"
      aria-label="Scroll to about section"
      class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink/50 sm:block dark:text-paper/50"
   >
      <Icon name="arrow-down" class="size-6" />
   </a>
</section>

<style>
   .hero-in {
      opacity: 0;
      will-change: opacity, transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      animation: hero-in 0.6s ease-out forwards;
   }

   @keyframes hero-in {
      from {
         opacity: 0;
         transform: translate3d(0, 12px, 0);
      }
      to {
         opacity: 1;
         transform: translate3d(0, 0, 0);
      }
   }

   @media (prefers-reduced-motion: reduce) {
      .hero-in {
         animation: none;
         opacity: 1;
      }
   }
</style>
