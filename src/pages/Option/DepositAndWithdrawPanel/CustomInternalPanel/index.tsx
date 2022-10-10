
import clsx from 'clsx';

import Panel, { Props as PanelProps } from 'components/UI/Panel';

const CustomInternalPanel = ({
  className,
  ...rest
}: PanelProps) => {
  return (
    <Panel
      className={clsx(
        'px-3',
        'py-2',
        className
      )}
      {...rest} />
  );
};

export default CustomInternalPanel;
