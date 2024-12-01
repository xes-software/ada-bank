import { BrowserWallet, type Wallet } from '@meshsdk/core';

let browserWalletApi: BrowserWallet | undefined = $state();
let cip30Wallet: Wallet | undefined = $state();

export const BrowserWalletState = {
	get browserWalletApi() {
		return browserWalletApi;
	},
	get cip30Wallet() {
		return cip30Wallet;
	},
	async connectWallet(w: Wallet) {
		browserWalletApi = await BrowserWallet.enable(w.name);
		cip30Wallet = w;
	},
	disconnectWallet() {
		cip30Wallet = undefined;
		browserWalletApi = undefined;
	}
};
