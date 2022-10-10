
import {
  Story,
  Meta
} from '@storybook/react';
import clsx from 'clsx';

import MetavaultPopOver, {
  MetavaultPopOverButton,
  MetavaultPopOverPanel
} from '.';

const SOLUTIONS = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##'
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##'
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##'
  }
];

const Template: Story = () => {
  return (
    <div
      className={clsx(
        'max-w-sm',
        'px-4',
        'mx-auto'
      )}>
      <MetavaultPopOver>
        {({ open }) => (
          <>
            <MetavaultPopOverButton
              open={open}
              label='Solutions' />
            <MetavaultPopOverPanel
              className={clsx(
                'max-w-sm',
                'lg:max-w-3xl'
              )}>
              <div
                className={clsx(
                  'grid',
                  'gap-8',
                  'bg-white',
                  'p-7',
                  'lg:grid-cols-2'
                )}>
                {SOLUTIONS.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      '-m-3',
                      'flex',
                      'items-center',
                      'rounded-lg',
                      'p-2',
                      'transition',
                      'duration-150',
                      'ease-in-out',
                      'hover:bg-gray-50',
                      'focus:outline-none',
                      'focus-visible:ring',
                      'focus-visible:ring-orange-500',
                      'focus-visible:ring-opacity-50'
                    )}>
                    <div
                      className={clsx(
                        'flex',
                        'h-10',
                        'w-10',
                        'shrink-0',
                        'items-center',
                        'justify-center',
                        'text-white',
                        'sm:h-12',
                        'sm:w-12'
                      )}>
                    </div>
                    <div className='ml-4'>
                      <p
                        className={clsx(
                          'text-sm',
                          'font-medium',
                          'text-gray-900'
                        )}>
                        {item.name}
                      </p>
                      <p
                        className={clsx(
                          'text-sm',
                          'text-gray-500'
                        )}>
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div
                className={clsx(
                  'bg-gray-50',
                  'p-4'
                )}>
                <a
                  href='##'
                  className={clsx(
                    'flow-root',
                    'rounded-md',
                    'px-2',
                    'py-2',
                    'transition',
                    'duration-150',
                    'ease-in-out',
                    'hover:bg-gray-100',
                    'focus:outline-none',
                    'focus-visible:ring',
                    'focus-visible:ring-orange-500',
                    'focus-visible:ring-opacity-50'
                  )}>
                  <span
                    className={clsx(
                      'flex',
                      'items-center'
                    )}>
                    <span
                      className={clsx(
                        'text-sm',
                        'font-medium',
                        'text-gray-900'
                      )}>
                      Documentation
                    </span>
                  </span>
                  <span
                    className={clsx(
                      'block',
                      'text-sm',
                      'text-gray-500'
                    )}>
                    Start integrating products and tools
                  </span>
                </a>
              </div>
            </MetavaultPopOverPanel>
          </>
        )}
      </MetavaultPopOver>
    </div>
  );
};

const Default = Template.bind({});
Default.args = {};

export {
  Default
};

export default {
  title: 'UI/MetavaultPopOver',
  component: MetavaultPopOver
} as Meta;
