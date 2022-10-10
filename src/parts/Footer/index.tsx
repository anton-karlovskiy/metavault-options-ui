
import * as React from 'react';
import clsx from 'clsx';

import FooterContent from './FooterContent';

type Ref = HTMLDivElement;
type Props = React.ComponentPropsWithRef<'footer'>;

const Footer = React.forwardRef<Ref, Props>((props, ref): JSX.Element => (
  <footer
    ref={ref}
    aria-labelledby='footerHeading'
    {...props}>
    <h2
      id='footerHeading'
      className='sr-only'>
      Footer
    </h2>
    <div
      className={clsx(
        'container',
        'mx-auto',
        'px-4',
        'sm:px-6',
        'lg:px-8',
        'py-4'
      )}>
      <FooterContent />
    </div>
  </footer>
));
Footer.displayName = 'Footer';

export default Footer;
