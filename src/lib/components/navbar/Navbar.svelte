<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { GraduationCap, FileText, Menu, Link } from 'lucide-svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet';
	import { page } from '$app/stores';
	import ConnectWallet from '../connect-wallet/ConnectWallet.svelte';
</script>

<div class="border-b">
	<div class="my-4 flex items-center px-4">
		<nav class={cn('hidden items-center justify-between md:flex')}>
			<a href="/">
				<Logo className="h-12 w-32"></Logo>
			</a>
			<div class="text-md mx-auto flex items-center space-x-4">
				<a
					href="/learn"
					class="ml-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					class:text-primary={$page.url.pathname.startsWith('/learn')}
				>
					<GraduationCap></GraduationCap>
					<span>Learn</span>
				</a>
				<a
					href="/contact"
					class="ml-4 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					class:text-primary={$page.url.pathname.startsWith('/contact')}
				>
					<Link></Link>
					<span>Contact</span>
				</a>

				<a
					href="/insights"
					class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					class:text-primary={$page.url.pathname.startsWith('/insights')}
				>
					<FileText></FileText>
					<span>Insights</span>
				</a>
			</div>
		</nav>

		<Sheet.Root>
			<Sheet.Trigger class={`${buttonVariants({ variant: 'outline' })} block md:hidden`}
				><Menu></Menu></Sheet.Trigger
			>

			<Sheet.Content side="left" class="flex flex-col text-muted-foreground">
				<nav class="grid gap-2 text-lg font-medium">
					<a href="/" class="mb-4 flex items-center justify-center gap-2 text-lg font-semibold">
						<Logo className="w-32" />
					</a>
					<a
						href="/learn"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
						class:text-foreground={$page.url.pathname.startsWith('/learn')}
						class:bg-muted={$page.url.pathname.startsWith('/learn')}
					>
						<GraduationCap></GraduationCap>
						<span>Learn</span>
					</a>
					<a
						href="/contact"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
						class:text-foreground={$page.url.pathname.startsWith('/contact')}
						class:bg-muted={$page.url.pathname.startsWith('/contact')}
					>
						<Link></Link>
						<span>Contact</span>
					</a>
					<a
						href="/insights"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
						class:text-foreground={$page.url.pathname.startsWith('/insights')}
						class:bg-muted={$page.url.pathname.startsWith('/insights')}
					>
						<FileText></FileText>
						<span>Insights</span>
					</a>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
		<div class="ml-auto flex items-center space-x-4">
			<ConnectWallet></ConnectWallet>
		</div>
	</div>
</div>
