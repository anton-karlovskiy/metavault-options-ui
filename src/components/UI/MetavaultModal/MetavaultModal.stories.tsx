
import * as React from 'react';
import {
  Story,
  Meta
} from '@storybook/react';
import clsx from 'clsx';

import MetavaultModal, {
  MetavaultModalTitle,
  MetavaultModalInnerWrapper,
  MetavaultModalProps
} from '.';

const Template: Story<MetavaultModalProps> = args => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>
        Open
      </button>
      <MetavaultModal
        {...args}
        open={open}
        onClose={handleClose}>
        <MetavaultModalInnerWrapper className='max-w-lg'>
          <MetavaultModalTitle
            className={clsx(
              'text-lg',
              'font-medium',
              'mb-6'
            )}>
            Payment successful
          </MetavaultModalTitle>
          <div className='mt-2'>
            <p
              className={clsx(
                'text-sm',
                'text-gray-500'
              )}>
              Your payment has been successfully submitted. We’ve sent your
              an email with all of the details of your order.
            </p>
          </div>
          <div className='mt-4'>
            <button
              type='button'
              className={clsx(
                'inline-flex',
                'justify-center',
                'px-4',
                'py-2',
                'text-sm',
                'font-medium',
                'text-blue-900',
                'bg-blue-100',
                'border',
                'border-transparent',
                'rounded-md',
                'hover:bg-blue-200',
                'focus:outline-none',
                'focus-visible:ring-2',
                'focus-visible:ring-offset-2',
                'focus-visible:ring-blue-500'
              )}
              onClick={handleClose}>
              Got it, thanks!
            </button>
          </div>
        </MetavaultModalInnerWrapper>
      </MetavaultModal>
    </>
  );
};

const Default = Template.bind({});
Default.args = {};

export {
  Default
};

export default {
  title: 'UI/MetavaultModal',
  component: MetavaultModal
} as Meta;
