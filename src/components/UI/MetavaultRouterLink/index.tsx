
import {
  Link,
  LinkProps
} from 'react-router-dom';
import clsx from 'clsx';
import { ArrowSmRightIcon } from '@heroicons/react/outline';

interface CustomProps {
  withArrow?: boolean;
}

const MetavaultRouterLink = ({
  className,
  children,
  withArrow = false,
  ...rest
}: Props): JSX.Element => (
  <Link
    className={clsx(
      'text-primaryInLightMode',
      'text-primaryInDarkMode',
      'space-x-1.5',
      'inline-flex',
      'items-center',
      className
    )}
    {...rest}>
    {children}
    {withArrow && (
      <ArrowSmRightIcon
        className={clsx(
          'w-5',
          'h-5'
        )} />
    )}
  </Link>
);

export type Props = LinkProps & CustomProps;

export default MetavaultRouterLink;
