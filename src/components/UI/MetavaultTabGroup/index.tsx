
import { Tab } from '@headlessui/react';
import { Props } from '@headlessui/react/dist/types';
import clsx from 'clsx';

const MetavaultTabGroup = Tab.Group;
const MetavaultTabPanels = Tab.Panels;

type MetavaultTabListProps = Props<typeof Tab.List>;
const MetavaultTabList = ({
  className,
  ...rest
}: MetavaultTabListProps): JSX.Element => (
  <Tab.List
    className={clsx(
      'flex',
      'p-1',
      'space-x-1',
      'bg-metavaultRiptide-900',
      'bg-opacity-20',
      'rounded-xl',
      className
    )}
    {...rest} />
);

type MetavaultTabProps = Props<typeof Tab>;
const MetavaultTab = ({
  className,
  ...rest
}: MetavaultTabProps): JSX.Element => (
  <Tab
    className={({ selected }) =>
      clsx(
        'w-full',
        'py-2.5',
        'text-sm',
        'leading-5',
        'font-medium',
        'rounded-lg',

        'focus:outline-none',
        'focus:ring-1',
        'ring-offset-1',
        'ring-offset-metavaultRiptide-400',
        'ring-white',
        'ring-opacity-60',
        selected ?
          clsx(
            'text-metavaultRiptide-700',
            'bg-white',
            'shadow'
          ) :
          clsx(
            'text-metavaultRiptide-100',
            'hover:bg-white',
            'hover:bg-opacity-10',
            'hover:text-white'
          ),
        className
      )
    }
    {...rest} />
);

type MetavaultTabPanelProps = Props<typeof Tab.Panel>;
const MetavaultTabPanel = ({
  className,
  ...rest
}: MetavaultTabPanelProps): JSX.Element => (
  <Tab.Panel
    className={clsx(
      'rounded-xl',
      'focus:outline-none',
      'focus:ring-1',
      'ring-offset-1',
      'ring-offset-metavaultRiptide-400',
      'ring-white',
      'ring-opacity-60',
      className
    )}
    {...rest} />
);

export {
  MetavaultTabList,
  MetavaultTabPanels,
  MetavaultTab,
  MetavaultTabPanel
};

export default MetavaultTabGroup;
