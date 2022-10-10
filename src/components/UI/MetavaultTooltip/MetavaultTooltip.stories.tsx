
import {
  Story,
  Meta
} from '@storybook/react';

import MetavaultTooltip, { Props } from '.';

const Template: Story<Props> = args => <MetavaultTooltip {...args} />;

const Default = Template.bind({});
Default.args = {
  label: 'Save',
  children: <button style={{ fontSize: 25 }}>💾</button>
};

export {
  Default
};

export default {
  title: 'UI/MetavaultTooltip',
  component: MetavaultTooltip
} as Meta;
