
import * as React from 'react';

import {
  hooks,
  network
} from 'web3-evm-connectors/network';
import Accounts from '../../Accounts';
import Card from '../../Card';
import Chain from '../../Chain';
import ConnectWithSelect from '../../ConnectWithSelect';
import Status from '../../Status';

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames
} = hooks;

function NetworkCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  // Attempt to connect eagerly on mount
  React.useEffect(() => {
    void network.activate();
  }, []);

  return (
    <Card>
      <div>
        <b>Network</b>
        <Status
          isActivating={isActivating}
          error={error}
          isActive={isActive} />
        <div style={{ marginBottom: '1rem' }} />
        <Chain chainId={chainId} />
        <Accounts
          accounts={accounts}
          provider={provider}
          ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: '1rem' }} />
      <ConnectWithSelect
        connector={network}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive} />
    </Card>
  );
}

export default NetworkCard;
