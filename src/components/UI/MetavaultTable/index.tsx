
import * as React from 'react';
import clsx from 'clsx';

const MetavaultTableContainer = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'div'>): JSX.Element => (
  <div
    className={clsx(
      'overflow-x-auto',
      'overflow-y-hidden',
      className
    )}
    {...rest} />
);

const MetavaultTable = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'table'>): JSX.Element => (
  <table
    className={clsx(
      'w-full',
      className
    )}
    {...rest} />
);

const MetavaultThead = (props: React.ComponentPropsWithRef<'thead'>): JSX.Element => (
  <thead {...props} />
);

const MetavaultTbody = (props: React.ComponentPropsWithRef<'tbody'>): JSX.Element => (
  <tbody {...props} />
);

const MetavaultTr = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'tr'>): JSX.Element => (
  <tr
    className={clsx(
      'border-b',
      'border-l-0',
      'border-r-0',
      'border-t-0',
      'border-solid',
      'border-gray-300', // TODO: should update per design
      'text-sm',
      className
    )}
    {...rest} />
);

const MetavaultTh = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'th'>): JSX.Element => (
  <th
    className={clsx(
      'text-secondaryInLightMode',
      'dark:text-secondaryInDarkMode',
      'text-base',
      'p-2',
      className
    )}
    {...rest} />
);

const MetavaultTd = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'td'>): JSX.Element => (
  <td
    className={clsx(
      'h-12',
      'p-2',
      className
    )}
    {...rest} />
);

export {
  MetavaultTableContainer,
  MetavaultThead,
  MetavaultTbody,
  MetavaultTr,
  MetavaultTh,
  MetavaultTd
};

export default MetavaultTable;
