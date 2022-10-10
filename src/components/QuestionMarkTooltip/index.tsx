
import clsx from 'clsx';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

import MetavaultTooltip, { Props as MetavaultTooltipProps } from 'components/UI/MetavaultTooltip';

const QuestionMarkTooltip = (props: Omit<MetavaultTooltipProps, 'children'>) => {
  return (
    <MetavaultTooltip {...props}>
      <QuestionMarkCircleIcon
        className={clsx(
          'w-4',
          'h-4',
          'dark:text-secondaryInDarkMode'
        )} />
    </MetavaultTooltip>
  );
};

export default QuestionMarkTooltip;
