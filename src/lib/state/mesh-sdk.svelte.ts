import type * as MeshSdk from '@meshsdk/core';

let sdk: typeof MeshSdk | undefined = $state();
let availableWallets: MeshSdk.Wallet[] = $state([]);

export const MeshSdkState = {
	async loadSdk() {
		sdk = await import('@meshsdk/core');
		availableWallets = await sdk.BrowserWallet.getAvailableWallets();
	},
	get sdk() {
		return sdk;
	},
	get availableWallets() {
		return availableWallets;
	}
};
