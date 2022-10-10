
import * as React from 'react';
import clsx from 'clsx';

import { BORDER_CLASSES } from 'utils/constants/styles';
import styles from './metavault-input.module.css';

type Ref = HTMLInputElement;
const MetavaultInput = React.forwardRef<Ref, Props>(({
  className,
  ...rest
}, ref): JSX.Element => (
  <input
    ref={ref}
    type='text'
    className={clsx(
      styles.metavaultInput,
      'focus:ring',
      'focus:border-metavaultRoyalBlue-300',
      'focus:ring-metavaultRoyalBlue-200',
      'focus:ring-opacity-50',
      'bg-paperInLightMode',
      'dark:bg-paperInDarkMode',
      'block',
      'w-full',
      'text-base',
      BORDER_CLASSES,
      'shadow-sm',
      'rounded-md',
      'placeholder-metavaultStormDust-300',
      className
    )}
    {...rest} />
));
MetavaultInput.displayName = 'MetavaultInput';

export type Props = React.ComponentPropsWithRef<'input'>;

export default MetavaultInput;
