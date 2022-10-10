
import {
  Meta,
  Story
} from '@storybook/react';

import MetavaultCheckbox, { Props } from '.';

const Template: Story<Props> = args => <MetavaultCheckbox {...args} />;

const Default = Template.bind({});
Default.args = {
  title: 'Comments',
  description: 'Get notified when someones posts a comment on a posting.'
};

export { Default };

export default {
  title: 'UI/MetavaultCheckbox',
  component: MetavaultCheckbox
} as Meta;
