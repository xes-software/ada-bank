<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Vault } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { BrowserWalletState } from '$lib/state/browser-wallet.svelte';
	import { cn } from '$lib/utils';

	let depositInput: string = $state('0');

	function deposit() {
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
		<Vault />
		Deposit
	</Dialog.Trigger>

	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Deposit</Dialog.Title>
		</Dialog.Header>

		<Label for="deposit-input">Amount ₳</Label>
		<Input
			bind:value={depositInput}
			id="deposit-input"
			type="number"
			class="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
		/>
		<Dialog.Footer>
			<Button onclick={deposit}>Create Deposit Transaction</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
