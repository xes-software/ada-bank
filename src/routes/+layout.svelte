<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { MeshSdkState } from '$lib/state/mesh-sdk.svelte';
	let { children } = $props();

	onMount(async () => {
		await MeshSdkState.loadSdk();
	});
</script>

<svelte:head>
	<script>
		(function () {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefersDark) {
				document.documentElement.classList.add('dark');
			}
		})();
	</script>
</svelte:head>

<Navbar></Navbar>
{@render children()}
