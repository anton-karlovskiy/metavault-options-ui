
import clsx from 'clsx';
import { useMeasure } from 'react-use';

import AppBar from 'parts/AppBar';
import Footer from 'parts/Footer';
import MetaMaskConnection from 'containers/MetaMaskConnection';
import { LAYOUT } from 'utils/constants/styles';

const Layout = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'div'>): JSX.Element => {
  const [ref, { height: footerHeight }] = useMeasure<HTMLDivElement>();

  return (
    <div
      style={{
        paddingTop: LAYOUT.APP_BAR_HEIGHT
      }}
      className={clsx(
        'dark:bg-defaultInDarkMode',
        'dark:text-primaryInDarkMode',
        'relative',
        'min-h-screen',
        className
      )}
      {...rest}>
      <AppBar
        appBarHeight={LAYOUT.APP_BAR_HEIGHT}
        className={clsx(
          'fixed',
          'top-0',
          'right-0',
          'left-0',
          'z-metavaultAppBar'
        )} />
      <main
        className={clsx(
          'container',
          'mx-auto',
          'px-4',
          'sm:px-8'
        )}
        style={{
          paddingBottom: footerHeight
        }}>
        <MetaMaskConnection />
        {children}
      </main>
      <Footer
        ref={ref}
        className={clsx(
          'absolute',
          'bottom-0',
          'w-full'
        )} />
    </div>
  );
};

export default Layout;
