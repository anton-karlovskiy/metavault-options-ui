
import * as React from 'react';
import clsx from 'clsx';

interface CustomProps {
  title: string;
  description?: string;
  ariaDescribedby?: string;
}

type Ref = HTMLInputElement;
const MetavaultCheckbox = React.forwardRef<Ref, Props>(({
  title,
  description,
  id,
  name,
  ariaDescribedby,
  ...rest
}, ref): JSX.Element => (
  <div
    className={clsx(
      'relative',
      'flex',
      'items-start'
    )}>
    <div
      className={clsx(
        'flex',
        'items-center',
        'h-5'
      )}>
      <input
        ref={ref}
        id={id}
        aria-describedby={ariaDescribedby}
        name={name}
        type='checkbox'
        className={clsx(
          'focus:ring-1',
          'focus:ring-metavaultRoyalBlue',
          'h-4',
          'w-4',
          'text-metavaultRoyalBlue-600',
          'border-gray-300',
          'rounded'
        )}
        {...rest} />
    </div>
    <div
      className={clsx(
        'ml-3',
        'text-sm'
      )}>
      <label
        htmlFor={id}
        className='font-medium'>
        {title}
      </label>
      {description && (
        <p
          id={ariaDescribedby}
          className='dark:text-secondaryInDarkMode'>
          {description}
        </p>
      )}
    </div>
  </div>
));
MetavaultCheckbox.displayName = 'MetavaultCheckbox';

export type Props = CustomProps & React.ComponentPropsWithRef<'input'>;

export default MetavaultCheckbox;
