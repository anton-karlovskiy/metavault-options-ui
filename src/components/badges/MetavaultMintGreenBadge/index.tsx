
import * as React from 'react';
import clsx from 'clsx';

enum Size {
  Small,
  Large
}

interface CustomProps {
  size?: Size;
}

type Ref = HTMLSpanElement;
const MetavaultMintGreenBadge = React.forwardRef<Ref, Props>(({
  className,
  size = Size.Small,
  ...rest
}, ref): JSX.Element => (
  <span
    ref={ref}
    className={clsx(
      'inline-flex',
      'items-center',
      { [clsx(
        'px-2.5',
        'py-0.5',
        'text-xs'
      )]: size === Size.Small },
      { [clsx(
        'px-3',
        'py-0.5',
        'text-sm'
      )]: size === Size.Large },
      'rounded-md',
      'font-medium',
      'bg-metavaultMintGreen-100',
      'text-metavaultMintGreen-800',
      className
    )}
    {...rest} />
));
MetavaultMintGreenBadge.displayName = 'MetavaultMintGreenBadge';

export type Props = React.ComponentPropsWithRef<'span'> & CustomProps;

export {
  Size
};

export default MetavaultMintGreenBadge;
