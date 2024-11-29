export type Cip30Wallet = {
	name: string;
	icon: string;
	enable: () => Promise<BrowserWalletApi>;
	isEnabled: () => Promise<boolean>;
	supportedExtensions: any[];
};

export type BrowserWalletApi = {
	getNetworkId(): Promise<number>;
	getUtxos(): Promise<string[] | undefined>;
	getBalance(): Promise<string>;
	getUsedAddresses(): Promise<string[]>;
	getUnusedAddresses(): Promise<string[]>;
	getChangeAddress(): Promise<string>;
	getRewardAddresses(): Promise<string[]>;
	signTx(tx: string, partialSign: boolean): Promise<string>;
	signData(
		address: string,
		payload: string
	): Promise<{
		signature: string;
		key: string;
	}>;
	submitTx(tx: string): Promise<string>;
	getCollateral(): Promise<string[]>;
	experimental: {
		getCollateral(): Promise<string[]>;
		on(eventName: string, callback: (...args: unknown[]) => void): void;
		off(eventName: string, callback: (...args: unknown[]) => void): void;
	};
};
