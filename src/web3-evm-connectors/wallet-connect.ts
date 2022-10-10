
import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect';

import { URLS } from 'config/web3/evm-chains';

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  actions =>
    new WalletConnect(actions, {
      rpc: URLS
    }),
  Object.keys(URLS).map(chainId => Number(chainId))
);
