
import clsx from 'clsx';
import {
  TrendingUpIcon,
  CurrencyDollarIcon
} from '@heroicons/react/solid';

import OptionInfoCard, {
  OptionInfoCardLabel,
  OptionInfoCardValue,
  ICON_CLASSES
} from 'components/OptionInfoCard';
import MetavaultRiptideContainedButton from 'components/buttons/MetavaultRiptideContainedButton';
import MetavaultMintGreenBadge from 'components/badges/MetavaultMintGreenBadge';
import MetavaultVividTangerineBadge from 'components/badges/MetavaultVividTangerineBadge';
import QuestionMarkTooltip from 'components/QuestionMarkTooltip';
import Panel from 'components/UI/Panel';
import {
  TokenSymbol,
  OptionType
} from 'utils/constants/enums';

interface Props {
  optionType: OptionType;
  TokenIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  tokenSymbol: TokenSymbol;
  apy: string;
  tvl: string;
  deposits: string;
  epoch: number;
  version: number;
  apyTooltip: string;
}

const OptionOverviewPanel = ({
  optionType,
  TokenIcon,
  tokenSymbol,
  apy,
  tvl,
  deposits,
  epoch,
  version,
  apyTooltip
}: Props) => {
  return (
    <Panel
      className={clsx(
        'p-4',
        'space-y-4',
        'w-96'
      )}>
      <div
        className={clsx(
          'flex',
          'items-center',
          'justify-between'
        )}>
        <div
          className={clsx(
            'flex',
            'items-center',
            'space-x-4'
          )}>
          <TokenIcon
            className={clsx(
              'w-9',
              'h-9'
            )} />
          <OptionInfoCardValue>
            {tokenSymbol}
          </OptionInfoCardValue>
        </div>
        {optionType === OptionType.Call ? (
          <MetavaultMintGreenBadge>
            CALL
          </MetavaultMintGreenBadge>
        ) : (
          <MetavaultVividTangerineBadge>
            PUT
          </MetavaultVividTangerineBadge>
        )}
      </div>
      <div
        className={clsx(
          'grid',
          'grid-cols-3',
          'gap-2'
        )}>
        <OptionInfoCard>
          <TrendingUpIcon className={ICON_CLASSES} />
          <OptionInfoCardLabel
            className={clsx(
              'flex',
              'items-center',
              'space-x-1'
            )}>
            <span>APY</span>
            <QuestionMarkTooltip label={apyTooltip} />
          </OptionInfoCardLabel>
          <OptionInfoCardValue>
            {apy}
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
        <OptionInfoCard>
          <TokenIcon
            className={clsx(
              ICON_CLASSES,
              'p-1'
            )} />
          <OptionInfoCardLabel>
            DEPOSITS
          </OptionInfoCardLabel>
          <OptionInfoCardValue>
            {deposits}
          </OptionInfoCardValue>
        </OptionInfoCard>
      </div>
      <MetavaultRiptideContainedButton className='w-full'>
        Manage
      </MetavaultRiptideContainedButton>
      <div
        className={clsx(
          'flex',
          'justify-between'
        )}>
        <h6 className='text-sm'>Epoch {epoch}</h6>
        <h6 className='text-sm'>Version {version}</h6>
      </div>
    </Panel>
  );
};

export type {
  Props
};

export default OptionOverviewPanel;
