
import clsx from 'clsx';

import DepositTabContent from './DepositTabContent';
import WithdrawTabContent from './WithdrawTabContent';
import Panel from 'components/UI/Panel';
import MetavaultTabGroup, {
  MetavaultTabList,
  MetavaultTabPanels,
  MetavaultTab,
  MetavaultTabPanel
} from 'components/UI/MetavaultTabGroup';

const DepositAndWithdrawPanel = () => {
  return (
    <Panel
      className={clsx(
        'w-full',
        'max-w-md',
        'dark:bg-paperInDarkMode',
        'px-2',
        'sm:px-4',
        'py-4',
        'sm:rounded-xl'
      )}>
      <MetavaultTabGroup>
        <MetavaultTabList>
          <MetavaultTab>
            Deposit
          </MetavaultTab>
          <MetavaultTab>
            Withdraw
          </MetavaultTab>
        </MetavaultTabList>
        <MetavaultTabPanels className='mt-2'>
          <MetavaultTabPanel>
            <DepositTabContent />
          </MetavaultTabPanel>
          <MetavaultTabPanel>
            <WithdrawTabContent />
          </MetavaultTabPanel>
        </MetavaultTabPanels>
      </MetavaultTabGroup>
    </Panel>
  );
};

export default DepositAndWithdrawPanel;
