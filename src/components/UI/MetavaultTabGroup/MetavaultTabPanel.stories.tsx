
import {
  Story,
  Meta
} from '@storybook/react';
import clsx from 'clsx';

import MetavaultTabGroup, {
  MetavaultTabList,
  MetavaultTabPanels,
  MetavaultTab,
  MetavaultTabPanel
} from '.';

const categories = {
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2
    },
    {
      id: 2,
      title: 'So you\'ve bought coffee... now what?',
      date: '2h ago',
      commentCount: 3,
      shareCount: 2
    }
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12
    }
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5
    },
    {
      id: 2,
      title: 'The worst advice we\'ve ever heard about coffee',
      date: '4d ago',
      commentCount: 1,
      shareCount: 2
    }
  ]
};

const Template: Story = args => (
  <div
    className={clsx(
      'w-full',
      'max-w-md',
      'px-2',
      'py-16',
      'sm:px-0'
    )}>
    <MetavaultTabGroup {...args}>
      <MetavaultTabList>
        {Object.keys(categories).map(category => (
          <MetavaultTab key={category}>
            {category}
          </MetavaultTab>
        ))}
      </MetavaultTabList>
      <MetavaultTabPanels className='mt-2'>
        {Object.values(categories).map((posts, index) => (
          <MetavaultTabPanel key={index}>
            <ul>
              {posts.map(post => (
                <li
                  key={post.id}
                  className={clsx(
                    'relative',
                    'p-3',
                    'rounded-md',
                    'hover:bg-coolGray-100'
                  )}>
                  <h3
                    className={clsx(
                      'text-sm',
                      'font-medium',
                      'leading-5'
                    )}>
                    {post.title}
                  </h3>
                  <ul
                    className={clsx(
                      'flex',
                      'mt-1',
                      'space-x-1',
                      'text-xs',
                      'font-normal',
                      'leading-4',
                      'text-coolGray-500'
                    )}>
                    <li>{post.date}</li>
                    <li>&middot;</li>
                    <li>{post.commentCount} comments</li>
                    <li>&middot;</li>
                    <li>{post.shareCount} shares</li>
                  </ul>
                </li>
              ))}
            </ul>
          </MetavaultTabPanel>
        ))}
      </MetavaultTabPanels>
    </MetavaultTabGroup>
  </div>
);

const Default = Template.bind({});
Default.args = {};

export {
  Default
};

export default {
  title: 'UI/MetavaultTabPanel',
  component: MetavaultTabGroup
} as Meta;
