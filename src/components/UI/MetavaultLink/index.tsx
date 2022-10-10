
import * as React from 'react';
import clsx from 'clsx';

const MetavaultLink = ({
  className,
  children,
  ...rest
}: Props): JSX.Element => (
  <a
    className={clsx(
      'hover:underline',
      'dark:text-primaryInDarkMode',
      'dark:hover:text-secondaryInDarkMode',
      className
    )}
    {...rest}>
    {children}
  </a>
);

export type Props = React.ComponentPropsWithRef<'a'>;

export default MetavaultLink;
