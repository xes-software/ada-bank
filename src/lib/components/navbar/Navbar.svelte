<script lang="ts">
	import { PiggyBank } from 'lucide-svelte';
	import Logo from '$lib/components/icons/Logo.svelte';
	import ConnectWallet from '$lib/components/connect-wallet/ConnectWallet.svelte';
</script>

<div class="border-b">
	<div class="my-4 flex items-center px-4">
		<nav class="flex w-full items-center justify-between">
			<a href="/" class="max-w-32 flex-shrink-0">
				<Logo className="h-12 w-32"></Logo>
			</a>
			<div class="mx-auto flex items-center space-x-4 text-lg">
				<div class="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all">
					B₳
					<PiggyBank></PiggyBank>
					NK
				</div>
			</div>
		</nav>
		<div class="ml-auto flex items-center space-x-4">
			<ConnectWallet className="w-32"></ConnectWallet>
		</div>
	</div>
</div>
