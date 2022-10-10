
import { Disclosure } from '@headlessui/react';
import {
  MenuIcon,
  XIcon
} from '@heroicons/react/outline';
import clsx from 'clsx';

import MetavaultLink from 'components/UI/MetavaultLink';
import MetavaultRouterLink from 'components/UI/MetavaultRouterLink';
import {
  METAVAULT_COMPANY_LINK,
  METAVAULT_DOCS_LINK,
  METAVAULT_COINGECKO_LINK,
  METAVAULT_COINMARKETCAP_LINK
} from 'config/links';
import { BORDER_CLASSES } from 'utils/constants/styles';
import { PAGES } from 'utils/constants/links';
import { ReactComponent as MetavaultOptionsLogoIcon } from 'assets/images/metavault-options-logo.svg';

const RESOURCES = [
  {
    title: 'METAVAULT DAO',
    link: METAVAULT_COMPANY_LINK
  },
  {
    title: 'DOCS',
    link: METAVAULT_DOCS_LINK
  },
  {
    title: 'COINGECKO',
    link: METAVAULT_COINGECKO_LINK
  },
  {
    title: 'COINMARKETCAP',
    link: METAVAULT_COINMARKETCAP_LINK
  }
];

interface CustomProps {
  appBarHeight: number;
}

const AppBar = ({
  appBarHeight,
  className,
  ...rest
}: CustomProps & React.ComponentPropsWithRef<'nav'>): JSX.Element => {
  return (
    <Disclosure
      as='nav'
      className={clsx(
        className,
        BORDER_CLASSES,
        'border-l-0',
        'border-r-0',
        'border-t-0'
      )}
      {...rest}>
      {({ open }) => (
        <>
          <div
            className={clsx(
              'container',
              'mx-auto',
              'px-4',
              'sm:px-6',
              'lg:px-8'
            )}>
            <div
              style={{ height: appBarHeight }}
              className={clsx(
                'flex',
                'justify-between'
              )}>
              <div
                className={clsx(
                  'flex',
                  'justify-between',
                  'w-full'
                )}>
                <div
                  className={clsx(
                    'shrink-0',
                    'flex',
                    'items-center'
                  )}>
                  <MetavaultRouterLink to={PAGES.HOME}>
                    <MetavaultOptionsLogoIcon
                      className={clsx(
                        'dark:text-metavaultRoyalBlue',
                        'h-8',
                        'sm:h-10'
                      )} />
                  </MetavaultRouterLink>
                </div>
                <div
                  className={clsx(
                    'hidden',
                    'sm:ml-6',
                    'sm:flex',
                    'sm:space-x-8'
                  )}>
                  {RESOURCES.map(resource => {
                    return (
                      <MetavaultLink
                        key={resource.title}
                        href={resource.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={clsx(
                          'border-transparent',
                          'inline-flex',
                          'items-center',
                          'px-1',
                          'pt-1',
                          'border-b-2',
                          'text-sm',
                          'font-medium'
                        )}>
                        {resource.title}
                      </MetavaultLink>
                    );
                  })}
                </div>
              </div>
              <div
                className={clsx(
                  '-mr-2',
                  'flex',
                  'items-center',
                  'sm:hidden'
                )}>
                {/* Mobile menu button */}
                <Disclosure.Button
                  className={clsx(
                    'inline-flex',
                    'items-center',
                    'justify-center',
                    'p-2',
                    'rounded-md',
                    'dark:text-primaryInDarkMode',
                    'dark:hover:text-secondaryInDarkMode',
                    'dark:hover:bg-metavaultRoyalBlue-400',
                    'focus:outline-none',
                    'focus:ring-2',
                    'focus:ring-inset',
                    'dark:focus:ring-metavaultStormDust'
                  )}>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon
                      className={clsx(
                        'block',
                        'h-8',
                        'w-8'
                      )}
                      aria-hidden='true' />
                  ) : (
                    <MenuIcon
                      className={clsx(
                        'block',
                        'h-8',
                        'w-8'
                      )}
                      aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div
              className={clsx(
                'pt-2',
                'pb-3',
                'space-y-1',
                'dark:bg-paperInDarkMode'
              )}>
              {RESOURCES.map(resource => {
                return (
                  <MetavaultLink
                    key={resource.title}
                    href={resource.link}
                    className={clsx(
                      'border-transparent',
                      'dark:hover:border-metavaultStormDust',
                      'block',
                      'pl-3',
                      'pr-4',
                      'py-2',
                      'border-l-4',
                      'text-sm',
                      'font-medium'
                    )}>
                    {resource.title}
                  </MetavaultLink>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AppBar;
