<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { ArrowRightIcon } from 'lucide-svelte';
</script>

<svelte:head>
	<title>xes.software</title>
	<meta name="description" content="Building & Educating in the Web3 Cardano Ecosystem." />
	<link rel="canonical" href="https://xes.software" />
	<meta property="og:title" content="xes.software" />
	<meta property="og:description" content="Building & Educating in the Web3 Cardano Ecosystem" />
	<meta property="og:image" content="/logo.png" />
	<meta property="og:url" content="https://xes.software" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="xes.software" />
	<meta name="twitter:description" content="Building & Educating in the Web3 Cardano Ecosystem" />
	<meta name="twitter:image" content="/logo.png" />
</svelte:head>

<div class="mx-4 mt-12 text-center">
	<div
		class="bg-gradient-to-br from-black from-10% to-black/40 bg-clip-text
		text-5xl font-extrabold leading-none tracking-tighter text-transparent [text-wrap:balance] dark:from-white dark:to-white/40 md:text-6xl lg:text-8xl"
	>
		We Build Your Web3 Applications to be
		<br />
		<span
			class="inline-flex h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-indigo-500 md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))]"
		>
			<ul class="block animate-text-slide text-center leading-tight [&_li]:block">
				<li>Decentralized</li>
				<li>Scalable</li>
				<li>Secure</li>
				<li>Beautiful</li>
				<li>on Cardano</li>
				<li aria-hidden="true">Decentralized</li>
			</ul>
		</span>
	</div>
	<p
		class="mb-10 mt-12 -translate-y-4 text-balance bg-clip-text text-lg tracking-tight text-muted-foreground md:text-xl"
	>
		Web3 moves fast, so do we. Have it shipped in days instead of weeks, months instead of years.
		<br class="hidden md:block" />
	</p>
	<a href="/contact" class={buttonVariants({ variant: 'default' })}>
		<span>Let's Build Together</span>
		<ArrowRightIcon
			class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
		/>
	</a>
</div>
