
import {
  Story,
  Meta
} from '@storybook/react';

import OptionOverviewPanel, { Props } from '.';
import {
  TokenSymbol,
  OptionType
} from 'utils/constants/enums';
import { ReactComponent as ETHIcon } from 'assets/images/eth.svg';

const Template: Story<Props> = args => <OptionOverviewPanel {...args} />;

const Default = Template.bind({});
Default.args = {
  optionType: OptionType.Call,
  TokenIcon: ETHIcon,
  tokenSymbol: TokenSymbol.ETH,
  apy: '1%',
  tvl: '10.1K',
  deposits: '32',
  epoch: 4,
  version: 2,
  apyTooltip: 'This is the base APY calculated from Venus\'s BNB APY.'
};

export {
  Default
};

export default {
  title: 'OptionOverviewPanel',
  component: OptionOverviewPanel
} as Meta;
