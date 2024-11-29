import { type Cip30Wallet, type BrowserWalletApi } from '$lib';

let browserWalletApi: BrowserWalletApi | undefined = $state();
let cip30Wallet: Cip30Wallet | undefined = $state();

export const BrowserWalletState = {
	get browserWalletApi() {
		return browserWalletApi;
	},
	get cip30Wallet() {
		return cip30Wallet;
	},
	async connectWallet(w: Cip30Wallet) {
		browserWalletApi = await w.enable();
		cip30Wallet = w;
	},
	disconnectWallet() {
		cip30Wallet = undefined;
		browserWalletApi = undefined;
	}
};
