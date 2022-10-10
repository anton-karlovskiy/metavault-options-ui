
import clsx from 'clsx';

const PageSubtitle = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'h5'>) => {
  return (
    <h5
      className={clsx(
        'text-lg',
        'dark:text-metavaultRiptide-100',
        'text-center',
        className
      )}
      {...rest}>
      {children}
    </h5>
  );
};

export default PageSubtitle;
