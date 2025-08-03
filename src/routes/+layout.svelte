
<svelte:head>
	<title>Right - Wonrity UXI</title>
</svelte:head>

<script lang="ts">
	import Inter from '$lib/fonts/Inter.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import { Toaster } from 'svelte-sonner';
	import WithDark from '$lib/theme/WithDark.svelte';

	let { children } = $props();
	
</script>



<ModeWatcher />
<WithDark>
<Toaster />
<Inter>
{@render children()}
</Inter>
</WithDark>