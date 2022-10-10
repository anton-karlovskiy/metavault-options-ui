
import clsx from 'clsx';
import {
  Meta,
  Story
} from '@storybook/react';
import { XIcon } from '@heroicons/react/outline';

import IconButton, { Props } from '.';

const Template: Story<Props> = args => <IconButton {...args} />;

const Default = Template.bind({});
Default.args = {
  className: clsx(
    'w-12',
    'h-12'
  ),
  children: (
    <XIcon
      className='text-currentColor'
      width={13}
      height={13} />
  )
};

export { Default };

export default {
  title: 'buttons/IconButton',
  component: IconButton
} as Meta;
