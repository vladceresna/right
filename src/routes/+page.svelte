<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button, ModeSwitcher } from "$lib";

	function handleClick() {
		toast.success('Hello world!');
	}
</script>

<main class="p-20">
  
    <Button onclick={handleClick}>Button</Button>
	<ModeSwitcher/>
	
</main>

