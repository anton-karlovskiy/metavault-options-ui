
import {
  Story,
  Meta
} from '@storybook/react';

import MetavaultInput, { Props } from '.';

const Template: Story<Props> = args => <MetavaultInput {...args} />;

const Default = Template.bind({});
Default.args = {
  id: 'id',
  name: 'name',
  placeholder: 'placeholder'
};

export {
  Default
};

export default {
  title: 'UI/MetavaultInput',
  component: MetavaultInput
} as Meta;
