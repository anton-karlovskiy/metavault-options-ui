
import * as React from 'react';
import clsx from 'clsx';

import MetavaultButtonBase, { Props as MetavaultButtonBaseProps } from 'components/UI/MetavaultButtonBase';
import { HOVER_BACKGROUND_CLASSES } from 'utils/constants/styles';
import { ReactComponent as SpinIcon } from 'assets/images/icons/spin.svg';

interface CustomProps {
  pending?: boolean;
}

type Ref = HTMLButtonElement;
const IconButton = React.forwardRef<Ref, Props>(({
  children,
  disabled = false,
  pending = false,
  className,
  ...rest
}, ref): JSX.Element => {
  const disabledOrPending = disabled || pending;

  return (
    <MetavaultButtonBase
      ref={ref}
      className={clsx(
        'focus:outline-none',
        'focus:ring-1',
        'focus:border-metavaultRoyalBlue-300',
        'focus:ring-metavaultRoyalBlue-200',
        'focus:ring-opacity-50',

        'rounded-full',
        'justify-center',
        HOVER_BACKGROUND_CLASSES,
        className
      )}
      disabled={disabledOrPending}
      {...rest}>
      {pending ? (
        <SpinIcon
          className={clsx(
            'animate-spin',
            'w-4',
            'h-4'
          )} />
      ) : children}
    </MetavaultButtonBase>
  );
});
IconButton.displayName = 'IconButton';

export type Props = CustomProps & MetavaultButtonBaseProps;

export default IconButton;
