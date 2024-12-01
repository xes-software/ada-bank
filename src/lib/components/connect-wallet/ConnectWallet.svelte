<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { BrowserWalletState } from '$lib/state/browser-wallet.svelte';
	import { TicketX, Wallet as WalletIcon } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { type Wallet, BrowserWallet } from '@meshsdk/core';
	import { cn } from '$lib/utils';
	import { browser } from '$app/environment';
	let { className }: { className: string | undefined } = $props();

	let availableWallets: Wallet[] = $state([]);
	if (browser) {
		BrowserWallet.getAvailableWallets().then((wallets) => (availableWallets = wallets));
	}
</script>

{#if BrowserWalletState.browserWalletApi === undefined}
	<Dialog.Root>
		<Dialog.Trigger class={cn(buttonVariants({ variant: 'default' }), className)}>
			<WalletIcon></WalletIcon>
			<span class="text-md">Connect</span>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Connect a Cardano Web Wallet</Dialog.Title>
				<Dialog.Description>
					Web wallets allow you to interact with the blockchain. It's secure and we can't see any of
					your private information.
				</Dialog.Description>
			</Dialog.Header>

			<div class="flex flex-wrap justify-center gap-4">
				{#if availableWallets.length === 0}
					<Card.Root class="hover:cursor-pointer hover:bg-primary/10">
						<Card.Content class="flex flex-col items-center">
							<TicketX class="h-24 w-24"></TicketX>
							No Wallet Found.</Card.Content
						>
					</Card.Root>
				{:else}
					{#each availableWallets as wallet}
						<button onclick={() => BrowserWalletState.connectWallet(wallet)}>
							<Card.Root class="hover:cursor-pointer hover:bg-primary/10">
								<Card.Content
									><img class="h-24 w-24" src={wallet.icon} alt={wallet.name} /></Card.Content
								>
							</Card.Root>
						</button>
					{/each}
				{/if}
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else if BrowserWalletState.cip30Wallet}
	<Button
		class={className}
		variant="outline"
		onclick={() => {
			BrowserWalletState.disconnectWallet();
		}}
	>
		<img
			class="max-h-4 max-w-4"
			src={BrowserWalletState.cip30Wallet.icon}
			alt="{BrowserWalletState.cip30Wallet.name} wallet icon"
		/>
		<span class="text-md">Connected</span>
	</Button>
{/if}
