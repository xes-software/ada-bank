import { type Cip30Wallet } from '$lib/types';

interface GlobalThis {
	cardano?: {
		lace: Cip30Wallet;
		nami: Cip30Wallet;
		// add other wallet namespaces here...
	};
}

export let availableWallets: Cip30Wallet[] = $state([]);
updateAvailableWallets();

export function updateAvailableWallets() {
	const global: GlobalThis = globalThis as unknown as GlobalThis;

	if (global.cardano?.lace !== undefined) {
		availableWallets.push(global.cardano.lace);
	}
	if (global.cardano?.nami !== undefined) {
		availableWallets.push(global.cardano.nami);
	}
	// add other wallet namespaces here...
}
