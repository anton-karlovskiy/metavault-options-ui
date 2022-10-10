
import * as React from 'react';
import Tooltip from '@reach/tooltip';
import { TooltipProps } from '@reach/tooltip/dist/declarations/src';
import clsx from 'clsx';
import '@reach/tooltip/styles.css';

import { BORDER_CLASSES } from 'utils/constants/styles';

type Ref = HTMLDivElement;
const MetavaultTooltip = React.forwardRef<Ref, Props>((props, ref): JSX.Element => {
  return (
    <Tooltip
      ref={ref}
      className={clsx(
        'w-max',
        'p-2.5',
        'rounded-lg',
        'text-xs',
        'backdrop-filter',
        'backdrop-blur-2xl',
        'dark:text-primaryInDarkMode',
        'dark:bg-paperInDarkMode',
        BORDER_CLASSES,
        'whitespace-normal',
        'z-metavaultTooltip',
        'shadow-md'
      )}
      {...props} />
  );
});
MetavaultTooltip.displayName = 'MetavaultTooltip';

export type Props = TooltipProps;

export default MetavaultTooltip;
