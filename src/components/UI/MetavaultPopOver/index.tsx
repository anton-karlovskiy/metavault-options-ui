
import * as React from 'react';
import {
  Popover,
  Transition
} from '@headlessui/react';
import { Props } from '@headlessui/react/dist/types';
import { ChevronDownIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

type MetavaultPopOverButtonProps = Props<typeof Popover.Button> & {
  open: boolean;
  label: string;
}

const MetavaultPopOverButton = ({
  open,
  className,
  label,
  ...rest
}: MetavaultPopOverButtonProps) => {
  return (
    <Popover.Button
      className={clsx(
        { 'text-opacity-90': open },
        'group',
        'inline-flex',
        'items-center',
        'rounded-md',
        'px-3',
        'py-2',
        'font-medium',
        'text-base',
        'bg-metavaultRiptide-700',
        'text-white',
        'hover:text-opacity-100',
        'focus:outline-none',
        'focus-visible:ring-1',
        'focus-visible:ring-white',
        'focus-visible:ring-opacity-75',
        className
      )}
      {...rest}>
      <span>{label}</span>
      <ChevronDownIcon
        className={clsx(
          { 'text-opacity-70': open },
          'ml-2',
          'h-5',
          'w-5',
          'text-metavaultRiptide-300',
          'transition',
          'duration-150',
          'ease-in-out',
          'group-hover:text-opacity-80'
        )}
        aria-hidden='true' />
    </Popover.Button>
  );
};

type MetavaultPopOverPanelProps = Props<typeof Popover.Panel> & {
  outerClassName?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

const MetavaultPopOverPanel = ({
  className,
  innerClassName,
  children,
  ...rest
}: MetavaultPopOverPanelProps) => {
  return (
    <Transition
      as={React.Fragment}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'>
      <Popover.Panel
        className={clsx(
          'px-4',
          'sm:px-0',
          'absolute',
          'left-1/2',
          'transform',
          '-translate-x-1/2',
          'z-metavaultTooltip',
          'w-screen',
          'mt-1',
          className
        )}
        {...rest}>
        <div
          className={clsx(
            'overflow-hidden',
            'rounded-lg',
            'shadow-lg',
            'ring-1',
            'ring-black',
            'ring-opacity-5',
            innerClassName
          )}>
          {children}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

type MetavaultPopOverProps = Props<typeof Popover>;

const MetavaultPopOver = ({
  className,
  ...rest
}: MetavaultPopOverProps) => {
  return (
    <Popover
      className={clsx(
        'relative',
        className
      )}
      {...rest} />
  );
};

export {
  MetavaultPopOverButton,
  MetavaultPopOverPanel
};

export default MetavaultPopOver;
