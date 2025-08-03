<script lang="ts">
	import { toast } from 'svelte-sonner';
	import Button from "$lib/ui/button/button.svelte";
	import ModeSwitcher from '$lib/ui/mode-switcher/ModeSwitcher.svelte';

</script>

<main class="p-20">
  
    <h2 class="text-xl font-bold">Изменение темы</h2>
    <ModeSwitcher/>
</main>

