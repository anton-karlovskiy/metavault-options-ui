
import clsx from 'clsx';

import { BORDER_CLASSES } from 'utils/constants/styles';

type Props = React.ComponentPropsWithRef<'div'>;

const Panel = ({
  className,
  ...rest
}: Props): JSX.Element => (
  <div
    className={clsx(
      'shadow',
      'overflow-hidden',
      'sm:rounded-lg',
      BORDER_CLASSES,
      className
    )}
    {...rest} />
);

export type {
  Props
};

export default Panel;
