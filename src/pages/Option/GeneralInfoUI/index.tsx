
import clsx from 'clsx';
import {
  TrendingUpIcon,
  CurrencyDollarIcon
} from '@heroicons/react/solid';

import EpochSelect from './EpochSelect';
import OptionInfoCard, {
  OptionInfoCardLabel,
  OptionInfoCardValue,
  ICON_CLASSES
} from 'components/OptionInfoCard';
import MetavaultMintGreenBadge, { Size } from 'components/badges/MetavaultMintGreenBadge';
import MetavaultRiptideContainedButton from 'components/buttons/MetavaultRiptideContainedButton';
import QuestionMarkTooltip from 'components/QuestionMarkTooltip';
import {
  TokenSymbol,
  OptionType
} from 'utils/constants/enums';

interface Props {
  farmAPY: string;
  tvl: string;
  farmApyTooltip: string;
  optionType: OptionType;
  optionTokenSymbol: TokenSymbol;
  TokenIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const GeneralInfoUI = ({
  farmAPY,
  tvl,
  farmApyTooltip,
  optionType,
  optionTokenSymbol,
  TokenIcon
}: Props) => {
  const optionTypeLabel = optionType.toUpperCase();

  return (
    <div className='space-y-6'>
      <h1
        className={clsx(
          'text-4xl',
          'flex',
          'items-center',
          'space-x-3'
        )}>
        <span>
          {optionTokenSymbol}
        </span>
        <span>SSOV</span>
        <MetavaultMintGreenBadge
          size={Size.Large}>
          {optionTypeLabel}
        </MetavaultMintGreenBadge>
      </h1>
      <h5>
        {optionTokenSymbol} Single Staking Option Vault (SSOV)
        <br />
        accepts user {optionTokenSymbol} deposits and stakes them to generate extra yield.
      </h5>
      <div
        className={clsx(
          'flex',
          'items-center',
          'space-x-2'
        )}>
        <MetavaultRiptideContainedButton className='flex-1'>
          Buy {optionTypeLabel} Options
        </MetavaultRiptideContainedButton>
        <EpochSelect />
      </div>
      <div
        className={clsx(
          'grid',
          'grid-cols-3',
          'gap-2'
        )}>
        <OptionInfoCard>
          <TokenIcon
            className={clsx(
              ICON_CLASSES,
              'p-1'
            )} />
          <OptionInfoCardLabel>
            Asset
          </OptionInfoCardLabel>
          <OptionInfoCardValue>
            {optionTokenSymbol}
          </OptionInfoCardValue>
        </OptionInfoCard>
        <OptionInfoCard>
          <TrendingUpIcon className={ICON_CLASSES} />
          <OptionInfoCardLabel
            className={clsx(
              'flex',
              'items-center',
              'space-x-1'
            )}>
            <span>Farm APY</span>
            <QuestionMarkTooltip label={farmApyTooltip} />
          </OptionInfoCardLabel>
          <OptionInfoCardValue>
            {farmAPY}
          </OptionInfoCardValue>
        </OptionInfoCard>
        <OptionInfoCard>
          <CurrencyDollarIcon className={ICON_CLASSES} />
          <OptionInfoCardLabel>
            TVL
          </OptionInfoCardLabel>
          <OptionInfoCardValue>
            {tvl}
          </OptionInfoCardValue>
        </OptionInfoCard>
      </div>
    </div>
  );
};

export default GeneralInfoUI;
