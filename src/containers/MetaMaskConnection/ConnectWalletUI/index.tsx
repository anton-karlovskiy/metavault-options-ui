
import type { Web3ReactHooks } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';

import MetavaultRiptideContainedButton from 'components/buttons/MetavaultRiptideContainedButton';

interface Props {
  connector: MetaMask;
  chainId: ReturnType<Web3ReactHooks['useChainId']>;
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  error: ReturnType<Web3ReactHooks['useError']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
}

function ConnectWalletUI({
  connector,
  chainId,
  isActivating,
  error,
  isActive
}: Props) {
  if (error) {
    return (
      <MetavaultRiptideContainedButton onClick={() => void connector.activate(undefined)}>
        Try Again?
      </MetavaultRiptideContainedButton>
    );
  } else if (isActive) {
    if (chainId === undefined) {
      throw new Error('Something went wrong!');
    }

    return (
      <MetavaultRiptideContainedButton onClick={() => void connector.deactivate()}>
        Disconnect
      </MetavaultRiptideContainedButton>
    );
  } else {
    return (
      <MetavaultRiptideContainedButton
        onClick={
          isActivating ?
            undefined :
            () => void connector.activate(undefined)
        }
        disabled={isActivating}>
        Connect
      </MetavaultRiptideContainedButton>
    );
  }
}

export default ConnectWalletUI;
