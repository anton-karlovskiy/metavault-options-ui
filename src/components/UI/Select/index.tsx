
import * as React from 'react';
import {
  Listbox,
  Transition
} from '@headlessui/react';
import { Props } from '@headlessui/react/dist/types';
import clsx from 'clsx';
import {
  CheckIcon,
  SelectorIcon
} from '@heroicons/react/solid';

import {
  BORDER_CLASSES,
  DISABLED_TEXT_CLASSES,
  RING_CLASSES
} from 'utils/constants/styles';

type SelectLabelProps = Props<typeof Listbox.Label>;

const SelectLabel = ({
  className,
  ...rest
}: SelectLabelProps): JSX.Element => (
  <Listbox.Label
    className={clsx(
      'block',
      'text-sm',
      'font-medium',
      'text-secondaryInLightMode',
      'dark:text-secondaryInDarkMode',
      'mb-1',
      className
    )}
    {...rest} />
);

type SelectButtonProps = Props<typeof Listbox.Button>;

const SelectButton = ({
  className,
  children,
  ...rest
}: SelectButtonProps): JSX.Element => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  <Listbox.Button
    className={clsx(
      'focus:outline-none',
      'focus:ring',
      'focus:border-metavaultRoyalBlue-300',
      'focus:ring-metavaultRoyalBlue-200',
      'focus:ring-opacity-50',

      'relative',
      'w-full',
      'bg-paperInLightMode',
      'dark:bg-paperInDarkMode',
      BORDER_CLASSES,
      'rounded-md',
      'shadow-sm',
      'pl-3',
      'pr-10',
      'py-2',
      'text-left',
      'cursor-default',
      'sm:text-sm',
      className
    )}
    {...rest}>
    {children}
    <span
      className={clsx(
        'ml-3',
        'absolute',
        'inset-y-0',
        'right-0',
        'flex',
        'items-center',
        'pr-2',
        'pointer-events-none'
      )}>
      <SelectorIcon
        className={clsx(
          'h-5',
          'w-5',
          'text-secondaryInLightMode',
          'dark:text-secondaryInDarkMode'
        )}
        aria-hidden='true' />
    </span>
  </Listbox.Button>
);

interface CustomSelectOptionsProps {
  open: boolean;
}

type SelectOptionsProps = CustomSelectOptionsProps & Props<typeof Listbox.Options>;

const SelectOptions = ({
  open,
  className,
  ...rest
}: SelectOptionsProps): JSX.Element => (
  <Transition
    show={open}
    as={React.Fragment}
    leave={clsx(
      'transition',
      'ease-in',
      'duration-100'
    )}
    leaveFrom='opacity-100'
    leaveTo='opacity-0'>
    <Listbox.Options
      static
      className={clsx(
        'absolute',
        'z-metavaultSpeedDial',
        'mt-1',
        'w-full',
        'bg-paperInLightMode',
        'dark:bg-paperInDarkMode',
        'shadow-lg',
        'max-h-56',
        'rounded-md',
        'py-1',
        'text-base',
        RING_CLASSES,
        'overflow-auto',
        'focus:outline-none',
        'sm:text-sm',
        className
      )}
      {...rest} />
  </Transition>
);

type SelectOptionProps = Props<typeof Listbox.Option>;

const SelectOption = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  value,
  className,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  disabled,
  ...rest
}: SelectOptionProps): JSX.Element => (
  <Listbox.Option
    className={({ active }) =>
      clsx(
        active ?
          clsx(
            'text-primaryInLightMode',
            'dark:text-primaryInDarkMode',
            'bg-metavaultRoyalBlue'
          ) :
          disabled ?
            DISABLED_TEXT_CLASSES :
            clsx(
              'text-secondaryInLightMode',
              'dark:text-secondaryInDarkMode'
            ),
        'cursor-default',
        'select-none',
        'relative',
        'py-2',
        'pl-3',
        'pr-9',
        'flex',
        'items-center',
        className
      )
    }
    value={value}
    disabled={disabled}
    {...rest} />
);

const SelectBody = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'div'>): JSX.Element => (
  <div
    className={clsx(
      'relative',
      className
    )}
    {...rest} />
);

interface CustomSelectCheckProps {
  active: boolean;
}

const SelectCheck = ({
  active,
  className,
  ...rest
}: CustomSelectCheckProps & React.ComponentPropsWithRef<'span'>): JSX.Element => (
  <span
    className={clsx(
      active ?
        'text-white' :
        'text-metavaultRoyalBlue',
      'absolute',
      'inset-y-0',
      'right-0',
      'flex',
      'items-center',
      'pr-4',
      className
    )}
    {...rest}>
    <CheckIcon
      className={clsx(
        'h-5',
        'w-5'
      )}
      aria-hidden='true' />
  </span>
);

interface CustomSelectTextProps {
  selected?: boolean;
}

const SelectText = ({
  selected = false,
  className,
  ...rest
}: CustomSelectTextProps & React.ComponentPropsWithRef<'span'>): JSX.Element => (
  <span
    className={clsx(
      selected ?
        'font-semibold' :
        'font-normal',
      'block',
      'truncate',
      className
    )}
    {...rest} />
);

type SelectProps = Props<typeof Listbox>;

const Select = ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  value,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  onChange,
  children
}: SelectProps): JSX.Element => {
  return (
    <Listbox
      value={value}
      onChange={onChange}>
      {children}
    </Listbox>
  );
};

export type {
  SelectProps
};

export {
  SelectLabel,
  SelectButton,
  SelectOptions,
  SelectOption,
  SelectBody,
  SelectCheck,
  SelectText
};

export default Select;
