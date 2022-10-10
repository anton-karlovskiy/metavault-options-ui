
import * as React from 'react';
import clsx from 'clsx';
import { XIcon } from '@heroicons/react/outline';

import IconButton, { Props as IconButtonProps } from 'components/buttons/IconButton';

type Ref = HTMLButtonElement;
const CloseIconButton = React.forwardRef<Ref, IconButtonProps>(({
  className,
  ...rest
}, ref) => (
  <IconButton
    ref={ref}
    className={clsx(
      'w-12',
      'h-12',
      className
    )}
    {...rest}>
    <XIcon
      width={24}
      height={24} />
  </IconButton>
));
CloseIconButton.displayName = 'CloseIconButton';

export default CloseIconButton;
