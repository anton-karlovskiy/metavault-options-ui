
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import {
  Web3ReactHooks,
  Web3ReactProvider
} from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import { WalletConnect } from '@web3-react/walletconnect';

import ConnectorName from 'containers/ConnectorName';
import {
  hooks as coinbaseWalletHooks,
  coinbaseWallet
} from 'web3-evm-connectors/coinbase-wallet';
import {
  hooks as metaMaskHooks,
  metaMask
} from 'web3-evm-connectors/meta-mask';
import {
  hooks as networkHooks,
  network
} from 'web3-evm-connectors/network';
import {
  hooks as walletConnectHooks,
  walletConnect
} from 'web3-evm-connectors/wallet-connect';

const CONNECTORS: [
  MetaMask |
  WalletConnect |
  CoinbaseWallet |
  Network,
  Web3ReactHooks
][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks]
];

interface Props {
  children: React.ReactNode;
}

const EVMWalletProvider = ({
  children
}: Props) => {
  return (
    <Web3ReactProvider connectors={CONNECTORS}>
      {children}
      <ConnectorName />
    </Web3ReactProvider>
  );
};

export {
  EVMWalletProvider
};
