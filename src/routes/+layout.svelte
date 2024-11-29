<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	let { children } = $props();

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
