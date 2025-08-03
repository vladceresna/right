# Right UI
### by Wonrity
## Why did we create Right UI?

We created Right UI because we needed a simple and beautiful solution for styling our SvelteKit projects. We were previously using Shadcn UI, but it started to go in the wrong direction, removing the New York style, abandoning old blocks which were beautiful and limiting customization options to just 7 color variants. So, we decided to make our own solution based on Shadcn UI, but with a focus on simplicity and independence from versions. We tried to make configuration as simple as possible and components especially beautiful.

## Installing

1. Create Svelte project:
```sh
npx sv create yourapp
cd yourapp
```
2. Install rightui:
```sh
npm i rightui
```
3. Add tailwindcss via SvelteKit CLI:
```sh
npx sv add tailwindcss
```
4. Create src/app.css:
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

@source "../node_modules/rightui";

:root {
	--background: hsl(0 0% 100%) /* <- Wrap in HSL */;
	--foreground: hsl(240 10% 3.9%);
	--muted: hsl(240 4.8% 95.9%);
	--muted-foreground: hsl(240 3.8% 46.1%);
	--popover: hsl(0 0% 100%);
	--popover-foreground: hsl(240 10% 3.9%);
	--card: hsl(0 0% 100%);
	--card-foreground: hsl(240 10% 3.9%);
	--border: hsl(240 5.9% 90%);
	--input: hsl(240 5.9% 90%);
	--primary: hsl(240 5.9% 10%);
	--primary-foreground: hsl(0 0% 98%);
	--secondary: hsl(240 4.8% 95.9%);
	--secondary-foreground: hsl(240 5.9% 10%);
	--accent: hsl(240 4.8% 95.9%);
	--accent-foreground: hsl(240 5.9% 10%);
	--destructive: hsl(0 72.2% 50.6%);
	--destructive-foreground: hsl(0 0% 98%);
	--ring: hsl(240 10% 3.9%);
	--sidebar: hsl(0 0% 98%);
	--sidebar-foreground: hsl(240 5.3% 26.1%);
	--sidebar-primary: hsl(240 5.9% 10%);
	--sidebar-primary-foreground: hsl(0 0% 98%);
	--sidebar-accent: hsl(240 4.8% 95.9%);
	--sidebar-accent-foreground: hsl(240 5.9% 10%);
	--sidebar-border: hsl(220 13% 91%);
	--sidebar-ring: hsl(217.2 91.2% 59.8%);

	--radius: 1rem;
}

.dark {
	--background: hsl(240 10% 3.9%);
	--foreground: hsl(0 0% 98%);
	--muted: hsl(240 3.7% 15.9%);
	--muted-foreground: hsl(240 5% 64.9%);
	--popover: hsl(240 10% 3.9%);
	--popover-foreground: hsl(0 0% 98%);
	--card: hsl(240 10% 3.9%);
	--card-foreground: hsl(0 0% 98%);
	--border: hsl(240 3.7% 15.9%);
	--input: hsl(240 3.7% 15.9%);
	--primary: hsl(0 0% 98%);
	--primary-foreground: hsl(240 5.9% 10%);
	--secondary: hsl(240 3.7% 15.9%);
	--secondary-foreground: hsl(0 0% 98%);
	--accent: hsl(240 3.7% 15.9%);
	--accent-foreground: hsl(0 0% 98%);
	--destructive: hsl(0 62.8% 30.6%);
	--destructive-foreground: hsl(0 0% 98%);
	--ring: hsl(240 4.9% 83.9%);
	--sidebar: hsl(240 5.9% 10%);
	--sidebar-foreground: hsl(240 4.8% 95.9%);
	--sidebar-primary: hsl(224.3 76.3% 48%);
	--sidebar-primary-foreground: hsl(0 0% 100%);
	--sidebar-accent: hsl(240 3.7% 15.9%);
	--sidebar-accent-foreground: hsl(240 4.8% 95.9%);
	--sidebar-border: hsl(240 3.7% 15.9%);
	--sidebar-ring: hsl(217.2 91.2% 59.8%);
}

@theme inline {
	/* Radius (for rounded-*) */
	--radius-sm: calc(var(--radius) - 4px);
	--radius-md: calc(var(--radius) - 2px);
	--radius-lg: var(--radius);
	--radius-xl: calc(var(--radius) + 4px);

	/* Colors */
	--color-background: var(--background);
	--color-foreground: var(--foreground);
	--color-muted: var(--muted);
	--color-muted-foreground: var(--muted-foreground);
	--color-popover: var(--popover);
	--color-popover-foreground: var(--popover-foreground);
	--color-card: var(--card);
	--color-card-foreground: var(--card-foreground);
	--color-border: var(--border);
	--color-input: var(--input);
	--color-primary: var(--primary);
	--color-primary-foreground: var(--primary-foreground);
	--color-secondary: var(--secondary);
	--color-secondary-foreground: var(--secondary-foreground);
	--color-accent: var(--accent);
	--color-accent-foreground: var(--accent-foreground);
	--color-destructive: var(--destructive);
	--color-destructive-foreground: var(--destructive-foreground);
	--color-ring: var(--ring);
	--color-radius: var(--radius);
	--color-sidebar: var(--sidebar);
	--color-sidebar-foreground: var(--sidebar-foreground);
	--color-sidebar-primary: var(--sidebar-primary);
	--color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
	--color-sidebar-accent: var(--sidebar-accent);
	--color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
	--color-sidebar-border: var(--sidebar-border);
	--color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
	* {
		@apply border-border;
	}

	body {
		@apply bg-background text-foreground;
	}
}

```
You can customize colors and other variables in `:root` and `.dark` blocks.
5. Add [svelte-sonner](https://svelte-sonner.vercel.app/):
```sh
npm install svelte-sonner
```
6. Add [mode-watcher](https://mode-watcher.sveco.dev/docs/getting-started):
```sh
npm install mode-watcher
```
7. Add app.css, font Inter, Toaster, ModeWatcher and WithDark in your root `+layout.svelte` file:
```svelte
<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Inter, WithDark } from 'rightui';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<WithDark>
<Toaster />
<Inter> 
{@render children?.()}
</Inter>
</WithDark>
```
8. Start your project:
```sh
npm run dev -- --open
```

🎉 Enjoy!
✨ No thanks, just give me a Star!
