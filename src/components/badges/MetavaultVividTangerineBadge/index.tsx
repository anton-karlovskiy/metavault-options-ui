
import * as React from 'react';
import clsx from 'clsx';

type Ref = HTMLSpanElement;
const MetavaultVividTangerineBadge = React.forwardRef<Ref, Props>(({
  className,
  ...rest
}, ref): JSX.Element => (
  <span
    ref={ref}
    className={clsx(
      'inline-flex',
      'items-center',
      'px-2.5',
      'py-0.5',
      'rounded-md',
      'text-sm',
      'font-medium',
      'bg-metavaultVividTangerine-100',
      'text-metavaultVividTangerine-800',
      className
    )}
    {...rest} />
));
MetavaultVividTangerineBadge.displayName = 'MetavaultVividTangerineBadge';

export type Props = React.ComponentPropsWithRef<'span'>;

export default MetavaultVividTangerineBadge;
