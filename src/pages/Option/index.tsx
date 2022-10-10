
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import GeneralInfoUI from './GeneralInfoUI';
import DepositAndWithdrawPanel from './DepositAndWithdrawPanel';
import { URL_PARAMETERS } from 'utils/constants/links';
import { TOKEN_ICONS } from 'utils/constants/tokens';
import {
  TokenSymbol,
  OptionType
} from 'utils/constants/enums';

const Option = () => {
  const {
    [URL_PARAMETERS.OPTION_TYPE]: optionType,
    [URL_PARAMETERS.OPTION_TOKEN_SYMBOL]: optionTokenSymbol
  } = useParams<Record<string, string>>();
  if (!optionType) {
    throw new Error('Something went wrong!');
  }
  if (!optionTokenSymbol) {
    throw new Error('Something went wrong!');
  }

  return (
    <>
      <div
        className={clsx(
          'flex',
          'justify-between',
          'space-x-5'
        )}>
        <GeneralInfoUI
          farmAPY='2.05%'
          tvl='$9.7K'
          farmApyTooltip={`This is the base APY calculated from Venus's ${optionTokenSymbol} APY.`}
          optionType={optionType as OptionType}
          optionTokenSymbol={optionTokenSymbol as TokenSymbol}
          TokenIcon={TOKEN_ICONS[optionTokenSymbol as TokenSymbol]} />
        <DepositAndWithdrawPanel />
      </div>
    </>
  );
};

export default Option;
