<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Deposit from '$lib/components/action/Deposit.svelte';
	import Withdraw from '$lib/components/action/Withdraw.svelte';

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
			<Deposit />
			<Withdraw />
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
