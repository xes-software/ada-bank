<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Video, Mail } from 'lucide-svelte';
	import X from '$lib/components/icons/X.svelte';
	import Linkedin from '$lib/components/icons/Linkedin.svelte';
</script>

<svelte:head>
	<title>Contact Professional Web3 Developers</title>
	<meta
		name="description"
		content="Our goal is bring your idea into reality. Let's talk about how we can make your vision a reality."
	/>
</svelte:head>

<div class="mx-4 mt-12">
	<div class="mb-12 text-center text-lg font-extrabold text-muted-foreground">
		We're available! Reach us on one of many platforms, or schedule a synchronous meeting (our
		personal favorite).
	</div>
	<div class="flex flex-wrap items-center justify-center gap-4 text-center">
		<a href="https://calendar.app.google/k8ebqjnakLGwEbty7" target="_blank">
			<Card.Root class="h-52 w-64 hover:cursor-pointer hover:bg-primary/10">
				<Card.Header>
					<Card.Title>30-min Intro Call</Card.Title>
				</Card.Header>

				<Card.Content class="flex items-center justify-center">
					<Video class="h-24 w-24"></Video>
				</Card.Content>
			</Card.Root>
		</a>

		<a href="https://x.com/xes_software" target="_blank">
			<Card.Root class="h-52 w-64 hover:cursor-pointer hover:bg-primary/10">
				<Card.Header>
					<Card.Title>X</Card.Title>
				</Card.Header>

				<Card.Content class="flex items-center justify-center text-center">
					<X className="h-20 w-24 fill-primary"></X>
				</Card.Content>
			</Card.Root>
		</a>

		<a href="https://www.linkedin.com/company/xes-software/" target="_blank">
			<Card.Root class="h-52 w-64 hover:cursor-pointer hover:bg-primary/10">
				<Card.Header>
					<Card.Title>Linkedin</Card.Title>
				</Card.Header>

				<Card.Content class="flex items-center justify-center">
					<Linkedin className="h-24 w-24 fill-primary"></Linkedin>
				</Card.Content>
			</Card.Root>
		</a>
		<a href="mailto:contact@xes.software">
			<Card.Root class="h-52 w-64 hover:cursor-pointer hover:bg-primary/10">
				<Card.Header>
					<Card.Title>contact@xes.software</Card.Title>
				</Card.Header>

				<Card.Content class="flex items-center justify-center">
					<Mail class="h-24 w-24" />
				</Card.Content>
			</Card.Root>
		</a>
	</div>
</div>
