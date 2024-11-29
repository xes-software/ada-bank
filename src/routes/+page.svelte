<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { BrowserWalletState } from '$lib/state/browser-wallet.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Vault, HandCoins } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	const txContent = [
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 },
		{ name: 'Fake Name 123', address: 'addr_108184830hhuh0uht02uht2t', amount: -1001000 }
	];
</script>

<div class="m-4 grid grid-cols-1 justify-center gap-4 text-center md:grid-cols-2">
	<Card.Root class="w-full">
		<Card.Header class="flex flex-row items-center justify-between">
			<Card.Title class="md:text-md pb-4 text-sm font-medium">Total ADA</Card.Title>
		</Card.Header>
		<Card.Content class="border-t-2">
			<div class="mb-4 text-2xl font-bold md:text-5xl">₳45,231.89</div>
			<p class="md:text-md text-xs text-muted-foreground">
				*Transactions submitted to the blockchain are not displayed immediately.
			</p>
		</Card.Content>
		<Card.Footer class="flex justify-center gap-4">
			{@render depositButton()}
			{@render withdrawButton()}
		</Card.Footer>
	</Card.Root>

	<Card.Root class="w-full">
		<Card.Header class="flex flex-row items-center justify-between">
			<Card.Title class="md:text-md pb-4 text-sm font-medium">Transactions</Card.Title>
		</Card.Header>
		<Card.Content class="mb-0 max-h-52 overflow-scroll rounded border-t-2 pb-4 pt-4">
			{#each txContent as tx}
				<div>
					<div class="flex items-center">
						<div class="ml-4 space-y-1">
							<p class="text-xs text-muted-foreground md:text-sm">{tx.address}</p>
						</div>
						<div class="ml-auto font-medium">₳ {tx.amount}</div>
					</div>
				</div>
			{/each}
		</Card.Content>
	</Card.Root>
</div>

{#snippet depositButton()}
	<Dialog.Root>
		<Dialog.Trigger
			class={cn(
				BrowserWalletState.browserWalletApi === undefined ? 'opacity-50' : '',
				BrowserWalletState.browserWalletApi === undefined ? 'pointer-events-none' : '',
				buttonVariants({ variant: 'default' })
			)}
		>
			<Vault />
			Deposit
		</Dialog.Trigger>

		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Deposit</Dialog.Title>
			</Dialog.Header>

			<Label for="deposit-input">Amount ₳</Label>
			<Input
				id="deposit-input"
				type="number"
				class="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
			/>
			<Dialog.Footer>
				<Button type="submit">Create Deposit Transaction</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{/snippet}

{#snippet withdrawButton()}
	<Dialog.Root>
		<Dialog.Trigger
			class={cn(
				BrowserWalletState.browserWalletApi === undefined ? 'opacity-50' : '',
				BrowserWalletState.browserWalletApi === undefined ? 'pointer-events-none' : '',
				buttonVariants({ variant: 'default' })
			)}
		>
			<HandCoins />
			Withdraw
		</Dialog.Trigger>

		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Withdraw</Dialog.Title>
			</Dialog.Header>

			<Label for="withdraw-input">Amount ₳</Label>
			<Input
				id="withdraw-input"
				type="number"
				class="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
			/>
			<Dialog.Footer>
				<Button type="submit">Create Withdraw Transaction</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{/snippet}
