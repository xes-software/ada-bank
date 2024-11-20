<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { HandCoins } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { BrowserWalletState } from '$lib/state/browser-wallet.svelte';
	import { cn } from '$lib/utils';

	let withdrawInput: string = $state('0');

	function withdraw() {
		// todo
	}
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={cn(
			BrowserWalletState.wallet === undefined ? 'opacity-50' : '',
			BrowserWalletState.wallet === undefined ? 'pointer-events-none' : '',
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
			bind:value={withdrawInput}
			id="withdraw-input"
			type="number"
			class="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
		/>
		<Dialog.Footer>
			<Button onclick={withdraw}>Create Withdraw Transaction</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
