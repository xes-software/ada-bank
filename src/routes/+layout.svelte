<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	import { MeshSdkState } from '$lib/state/mesh-sdk.svelte';
	import { onNavigate } from '$app/navigation';
	let { children } = $props();

	onMount(async () => {
		await MeshSdkState.loadSdk();
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
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
