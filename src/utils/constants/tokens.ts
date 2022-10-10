
import { TokenSymbol } from 'utils/constants/enums';
import { ReactComponent as ETHIcon } from 'assets/images/eth.svg';
import { ReactComponent as BNBIcon } from 'assets/images/bnb.svg';

const TOKEN_ICONS: {
  [key in TokenSymbol]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  [TokenSymbol.BNB]: BNBIcon,
  [TokenSymbol.ETH]: ETHIcon
};

export {
  TOKEN_ICONS
};
