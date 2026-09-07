export const siteUrl = "https://wirayuda.vercel.app";

export const profile = {
   name: "Wira Yuda",
   initials: "WY",

   roles: [
      "Self-Taught Developer",
      "Full-Stack Developer",
      "Frontend Engineer",
      "Backend Engineer",
   ],
   tagline:
      "Self-taught developer who learns by reading docs and shipping real projects — from real-time apps to full-stack platforms.",
   location: "Based in Indonesia · Open to remote work",
   email: "wirayuda233@gmail.com",
   resumeHref: "#",
   avatarGradient: "from-brand-400 via-accent-500 to-brand-700",
};

export const socials = [
   { label: "GitHub", icon: "github", href: "https://github.com/wirayuda299" },
   {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/wira-yuda29/",
   },
   { label: "Email", icon: "mail", href: "mailto:wirayuda233@gmail.com" },
] as const;

export const navLinks = [
   { label: "About", href: "#about" },
   { label: "Skills", href: "#skills" },
   { label: "Projects", href: "#projects" },
   { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
   {
      title: "Frontend",
      skills: [
         "JavaScript / TypeScript",
         "React",
         "Next.js",
         "Svelte / SvelteKit",
         "Redux",
         "Zustand",
         "CSS / Tailwind CSS",
      ],
   },
   {
      title: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "Go", "WebSocket"],
   },
   {
      title: "Data & Tools",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Git"],
   },
];

export const projects = [
   {
      title: "Cord",
      description:
         "Discord clone with real-time chat, threads, roles & permissions, and WebSocket presence — Next.js frontend, Go backend.",
      tags: ["Next.js", "Go", "PostgreSQL", "Redis", "WebSocket"],
      href: "https://cord-client.onrender.com",
      repo: "https://github.com/wirayuda299/cord",
      thumbnail: "/images/discord.avif",
      gradient: "from-brand-500 to-accent-500",
   },
   {
      title: "Morent",
      description:
         "Full-stack car rental platform with a Next.js frontend, Go backend, Stripe checkout, and Clerk auth.",
      tags: ["Next.js", "Go", "PostgreSQL", "Stripe", "Clerk"],
      href: "https://morent-go.vercel.app",
      repo: "https://github.com/wirayuda299/morent_go",
      thumbnail: "/images/morent.avif",
      gradient: "from-accent-400 to-brand-600",
   },
   {
      title: "Instafam",
      description:
         "Instagram clone with a Next.js frontend and a NestJS backend, real-time notifications over WebSockets.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "WebSocket"],
      href: "https://instafam-v2.onrender.com",
      repo: "https://github.com/wirayuda299/instafam-v2",
      thumbnail: "/images/instafam.avif",
      gradient: "from-brand-600 to-brand-300",
   },
];
