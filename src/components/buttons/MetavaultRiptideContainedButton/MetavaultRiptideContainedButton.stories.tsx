
import {
  Story,
  Meta
} from '@storybook/react';

import MetavaultRiptideContainedButton, { Props } from '.';

const Template: Story<Props> = args => <MetavaultRiptideContainedButton {...args} />;

const Default = Template.bind({});
Default.args = {
  children: 'MetavaultRiptideContainedButton'
};

export {
  Default
};

export default {
  title: 'buttons/MetavaultRiptideContainedButton',
  component: MetavaultRiptideContainedButton
} as Meta;
