
import clsx from 'clsx';

interface OptionFeatureCardProps {
  children: React.ReactNode;
}

const OptionInfoCard = ({
  children
}: OptionFeatureCardProps) => {
  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'items-center',
        'p-4',
        'rounded-xl',
        'dark:bg-paperInDarkMode'
      )}>
      {children}
    </div>
  );
};

const OptionInfoCardLabel = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'div'>) => {
  return (
    <div
      className={clsx(
        'text-xs',
        'dark:text-secondaryInDarkMode',
        className
      )}
      {...rest} />
  );
};

const OptionInfoCardValue = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'h4'>) => {
  return (
    <h4
      className={clsx(
        'text-xl',
        className
      )}
      {...rest}>
      {children}
    </h4>
  );
};

const ICON_CLASSES = clsx(
  'w-12',
  'h-12',
  'dark:text-metavaultRoyalBlue'
);

export {
  OptionInfoCardLabel,
  OptionInfoCardValue,
  ICON_CLASSES
};

export default OptionInfoCard;
