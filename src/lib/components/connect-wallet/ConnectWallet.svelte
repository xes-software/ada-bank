<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { MeshSdkState } from '$lib/state/mesh-sdk.svelte';
	import { BrowserWalletState } from '$lib/state/browser-wallet.svelte';
	import { Wallet } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
</script>

{#if MeshSdkState.sdk === undefined}
	<Button disabled={true}>Loading...</Button>
{:else if MeshSdkState.sdk && BrowserWalletState.wallet === undefined}
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>
			<Wallet></Wallet>
			<span class="text-md">Connect</span>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Connect a Cardano Web Wallet</Dialog.Title>
				<Dialog.Description>
					Web wallets allow you to interact with the Blockchain. When you connect; it's secure and
					we can't see any of your private information.
				</Dialog.Description>
			</Dialog.Header>

			<div class="flex flex-wrap justify-center gap-4">
				{#each MeshSdkState.availableWallets as wallet}
					<button onclick={() => BrowserWalletState.connectWallet(wallet)}>
						<Card.Root class="hover:cursor-pointer hover:bg-primary/10">
							<Card.Content
								><img class="h-24 w-24" src={wallet.icon} alt={wallet.name} /></Card.Content
							>
						</Card.Root>
					</button>
				{/each}
			</div>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4"></div>
				<div class="grid grid-cols-4 items-center gap-4"></div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
{:else if MeshSdkState.sdk && BrowserWalletState.wallet}
	<Button
		variant="outline"
		onclick={async () => {
			await BrowserWalletState.disconnectWallet();
		}}
	>
		<Wallet></Wallet>
		<span class="text-md">Connected</span>
	</Button>
{/if}
