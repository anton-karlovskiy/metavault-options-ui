
import {
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import SendOneLamportToRandomAddress from './SendOneLamportToRandomAddress';
import AutoConnectSwitch from './AutoConnectSwitch';
import RequestAirdrop from './RequestAirdrop';
import SignMessage from './SignMessage';
import Example1 from './Example1';

const Web3SolanaConnectionApp = () => {
  return (
    <>
      <SignMessage />
      <AutoConnectSwitch />
      <RequestAirdrop />
      <WalletMultiButton />
      <WalletDisconnectButton />
      <SendOneLamportToRandomAddress />
      <Example1 />
    </>
  );
};

export default Web3SolanaConnectionApp;
