
import * as React from 'react';
import clsx from 'clsx';

import MetavaultButtonBase, { Props as MetavaultButtonBaseProps } from 'components/UI/MetavaultButtonBase';
import {
  DISABLED_BACKGROUND_CLASSES,
  DISABLED_TEXT_CLASSES,
  TEXT_CLASSES
} from 'utils/constants/styles';
import { ReactComponent as SpinIcon } from 'assets/images/icons/spin.svg';

interface CustomProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  pending?: boolean;
}

type Ref = HTMLButtonElement;
const MetavaultRiptideContainedButton = React.forwardRef<Ref, Props>(({
  className,
  children,
  startIcon,
  endIcon,
  disabled = false,
  pending = false,
  ...rest
}, ref): JSX.Element => {
  const disabledOrPending = disabled || pending;

  return (
    <MetavaultButtonBase
      ref={ref}
      type='button'
      className={clsx(
        'focus:outline-none',
        'focus:ring-1',
        'focus:border-metavaultRiptide-300',
        'focus:ring-metavaultRiptide-200',
        'focus:ring-opacity-50',

        'border',
        'border-transparent',
        'font-medium',

        disabledOrPending ? clsx(
          DISABLED_BACKGROUND_CLASSES,
          DISABLED_TEXT_CLASSES
        ) : clsx(
          TEXT_CLASSES,
          'dark:!text-black', // Suppressing white text color in this specific edge case
          'bg-metavaultRiptide',
          'hover:bg-metavaultRiptide-600'
        ),

        'rounded',
        'px-4',
        'py-2',
        'text-sm',
        'space-x-1',
        'justify-center',
        className
      )}
      disabled={disabledOrPending}
      {...rest}>
      {pending && (
        <SpinIcon
          className={clsx(
            'animate-spin',
            'w-4',
            'h-4',
            'mr-3'
          )} />
      )}
      {startIcon}
      <span>
        {children}
      </span>
      {endIcon}
    </MetavaultButtonBase>
  );
});
MetavaultRiptideContainedButton.displayName = 'MetavaultRiptideContainedButton';

export type Props = CustomProps & MetavaultButtonBaseProps;

export default MetavaultRiptideContainedButton;
