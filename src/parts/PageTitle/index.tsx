
import clsx from 'clsx';

const PageTitle = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'h1'>) => {
  return (
    <h1
      className={clsx(
        'font-bold',
        'text-7xl',
        'dark:text-metavaultRiptide-100',
        'text-center',
        className
      )}
      {...rest}>
      {children}
    </h1>
  );
};

export default PageTitle;
