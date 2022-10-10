
import clsx from 'clsx';

import PageTitle from 'parts/PageTitle';
import PageSubtitle from 'parts/PageSubtitle';
import OptionOverviewPanel from 'components/OptionOverviewPanel';
import {
  TokenSymbol,
  OptionType
} from 'utils/constants/enums';
import { ReactComponent as ETHIcon } from 'assets/images/eth.svg';

const OPTIONS = [
  {
    optionType: OptionType.Call,
    TokenIcon: ETHIcon,
    tokenSymbol: TokenSymbol.ETH,
    apy: '1%',
    tvl: '10.1K',
    deposits: '32',
    epoch: 4,
    version: 2,
    apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
  },
  {
    optionType: OptionType.Call,
    TokenIcon: ETHIcon,
    tokenSymbol: TokenSymbol.ETH,
    apy: '1%',
    tvl: '10.1K',
    deposits: '32',
    epoch: 4,
    version: 2,
    apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
  },
  {
    optionType: OptionType.Call,
    TokenIcon: ETHIcon,
    tokenSymbol: TokenSymbol.ETH,
    apy: '1%',
    tvl: '10.1K',
    deposits: '32',
    epoch: 4,
    version: 2,
    apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
  },
  {
    optionType: OptionType.Call,
    TokenIcon: ETHIcon,
    tokenSymbol: TokenSymbol.ETH,
    apy: '1%',
    tvl: '10.1K',
    deposits: '32',
    epoch: 4,
    version: 2,
    apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
  },
  {
    optionType: OptionType.Call,
    TokenIcon: ETHIcon,
    tokenSymbol: TokenSymbol.ETH,
    apy: '1%',
    tvl: '10.1K',
    deposits: '32',
    epoch: 4,
    version: 2,
    apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
  },
  {
    optionType: OptionType.Call,
    TokenIcon: ETHIcon,
    tokenSymbol: TokenSymbol.ETH,
    apy: '1%',
    tvl: '10.1K',
    deposits: '32',
    epoch: 4,
    version: 2,
    apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
  }
];

const Options = () => {
  return (
    <>
      <div
        className={clsx(
          'space-y-6',
          'max-w-2xl',
          'mx-auto'
        )}>
        <PageTitle>
          Discover Options
        </PageTitle>
        <PageSubtitle>
          {/* eslint-disable-next-line max-len */}
          Supply option liquidity to an Option Vault. Collect premiums from option purchases and earn rewards from farms simultaneously.
        </PageSubtitle>
      </div>
      <div
        className={clsx(
          'grid',
          'lg:grid-cols-3',
          'grid-cols-1',
          'place-items-center',
          'gap-y-10',
          'my-10'
        )}>
        {OPTIONS.map((item, index) => (
          <OptionOverviewPanel
            key={index} // TODO: update this key when we have a proper id
            optionType={item.optionType}
            TokenIcon={item.TokenIcon}
            tokenSymbol={item.tokenSymbol}
            apy={item.apy}
            tvl={item.tvl}
            deposits={item.deposits}
            epoch={item.epoch}
            version={item.version}
            apyTooltip={item.apyTooltip} />
        ))}
      </div>
    </>
  );
};

export default Options;
