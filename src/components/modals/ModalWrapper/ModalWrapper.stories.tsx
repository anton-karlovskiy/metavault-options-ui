
import {
  Meta,
  Story
} from '@storybook/react';

import ModalWrapper, { Props } from '.';

const Template: Story<Props> = args => <ModalWrapper {...args} />;

const Default = Template.bind({});
Default.args = {
  open: true,
  clickAwayToCloseDisabled: true,
  title: 'Title',
  children: 'Children'
};

export { Default };

export default {
  title: 'modals/ModalWrapper',
  component: ModalWrapper
} as Meta;
