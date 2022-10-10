
import clsx from 'clsx';

import MetavaultLink from 'components/UI/MetavaultLink';
import {
  METAVAULT_TELEGRAM_LINK,
  METAVAULT_TWITTER_LINK,
  METAVAULT_DISCORD_LINK,
  METAVAULT_GITHUB_LINK,
  METAVAULT_MEDIUM_LINK
} from 'config/links';
import { getCurrentYear } from 'utils/helpers/time';
import { ReactComponent as TwitterLogoIcon } from 'assets/images/icons/twitter-logo.svg';
import { ReactComponent as TelegramLogoIcon } from 'assets/images/icons/telegram-logo.svg';
import { ReactComponent as GitHubLogoIcon } from 'assets/images/icons/git-hub-logo.svg';
import { ReactComponent as DiscordLogoIcon } from 'assets/images/icons/discord-logo.svg';
import { ReactComponent as MediumLogoIcon } from 'assets/images/icons/medium-logo.svg';

const SOCIAL_ITEMS = [
  {
    name: 'Twitter',
    href: METAVAULT_TWITTER_LINK,
    // eslint-disable-next-line react/display-name
    icon: (props: React.ComponentPropsWithRef<'svg'>) => (
      <TwitterLogoIcon
        width={24}
        height={24}
        {...props} />
    )
  },
  {
    name: 'Discord',
    href: METAVAULT_DISCORD_LINK,
    // eslint-disable-next-line react/display-name
    icon: (props: React.ComponentPropsWithRef<'svg'>) => (
      <DiscordLogoIcon
        width={18}
        height={12}
        {...props} />
    )
  },
  {
    name: 'Telegram',
    href: METAVAULT_TELEGRAM_LINK,
    // eslint-disable-next-line react/display-name
    icon: (props: React.ComponentPropsWithRef<'svg'>) => (
      <TelegramLogoIcon
        width={18}
        height={16}
        {...props} />
    )
  },
  {
    name: 'GitHub',
    href: METAVAULT_GITHUB_LINK,
    // eslint-disable-next-line react/display-name
    icon: (props: React.ComponentPropsWithRef<'svg'>) => (
      <GitHubLogoIcon
        width={24}
        height={24}
        {...props} />
    )
  },
  {
    name: 'Medium',
    href: METAVAULT_MEDIUM_LINK,
    // eslint-disable-next-line react/display-name
    icon: (props: React.ComponentPropsWithRef<'svg'>) => (
      <MediumLogoIcon
        width={16}
        height={14}
        {...props} />
    )
  }
];

const FooterContent = (): JSX.Element => (
  <div
    className={clsx(
      'md:flex',
      'md:items-center',
      'md:justify-between'
    )}>
    <div
      className={clsx(
        'flex',
        'space-x-6',
        'md:order-2',
        'items-center'
      )}>
      {SOCIAL_ITEMS.map(item => (
        <MetavaultLink
          className={clsx(
            'w-8',
            'h-8',
            'ring-1',
            'dark:ring-metavaultRoyalBlue',
            'rounded-full',
            'm-1',
            'inline-grid',
            'place-items-center'
          )}
          key={item.name}
          href={item.href}
          target='_blank'
          rel='noopener noreferrer'>
          <span className='sr-only'>{item.name}</span>
          <item.icon aria-hidden='true' />
        </MetavaultLink>
      ))}
    </div>
    <p
      className={clsx(
        'mt-8',
        'text-xs',
        'md:mt-0',
        'md:order-1'
      )}>
      &copy; {getCurrentYear()} All rights reserved.
    </p>
  </div>
);

export default FooterContent;
