
import * as React from 'react';
import clsx from 'clsx';
import {
  Meta,
  Story
} from '@storybook/react';
import { useTable } from 'react-table';

import MetavaultTable, {
  MetavaultTableContainer,
  MetavaultThead,
  MetavaultTbody,
  MetavaultTr,
  MetavaultTh,
  MetavaultTd
} from '.';

const data = [
  {
    firstName: 'work',
    lastName: 'personality',
    age: 13,
    visits: 34,
    progress: 96,
    status: 'relationship'
  },
  {
    firstName: 'tree',
    lastName: 'glove',
    age: 19,
    visits: 86,
    progress: 19,
    status: 'relationship'
  },
  {
    firstName: 'expression',
    lastName: 'strategy',
    age: 16,
    visits: 10,
    progress: 16,
    status: 'relationship'
  },
  {
    firstName: 'unit',
    lastName: 'sir',
    age: 11,
    visits: 44,
    progress: 21,
    status: 'relationship'
  },
  {
    firstName: 'emotion',
    lastName: 'popcorn',
    age: 6,
    visits: 90,
    progress: 25,
    status: 'complicated'
  },
  {
    firstName: 'carpenter',
    lastName: 'taste',
    age: 26,
    visits: 23,
    progress: 53,
    status: 'complicated'
  },
  {
    firstName: 'pets',
    lastName: 'garbage',
    age: 11,
    visits: 78,
    progress: 96,
    status: 'complicated'
  },
  {
    firstName: 'insurance',
    lastName: 'gate',
    age: 21,
    visits: 37,
    progress: 99,
    status: 'single'
  },
  {
    firstName: 'volcano',
    lastName: 'entry',
    age: 14,
    visits: 17,
    progress: 4,
    status: 'relationship'
  },
  {
    firstName: 'boot',
    lastName: 'advice',
    age: 27,
    visits: 53,
    progress: 83,
    status: 'complicated'
  },
  {
    firstName: 'roll',
    lastName: 'son',
    age: 17,
    visits: 27,
    progress: 53,
    status: 'complicated'
  },
  {
    firstName: 'join',
    lastName: 'kittens',
    age: 19,
    visits: 13,
    progress: 17,
    status: 'relationship'
  },
  {
    firstName: 'dog',
    lastName: 'requirement',
    age: 27,
    visits: 57,
    progress: 82,
    status: 'complicated'
  },
  {
    firstName: 'passion',
    lastName: 'cause',
    age: 7,
    visits: 68,
    progress: 40,
    status: 'complicated'
  },
  {
    firstName: 'storage',
    lastName: 'poetry',
    age: 14,
    visits: 67,
    progress: 33,
    status: 'complicated'
  },
  {
    firstName: 'sack',
    lastName: 'negotiation',
    age: 1,
    visits: 98,
    progress: 43,
    status: 'single'
  },
  {
    firstName: 'guitar',
    lastName: 'appliance',
    age: 17,
    visits: 22,
    progress: 63,
    status: 'single'
  },
  {
    firstName: 'drama',
    lastName: 'quartz',
    age: 26,
    visits: 30,
    progress: 11,
    status: 'complicated'
  },
  {
    firstName: 'paper',
    lastName: 'method',
    age: 14,
    visits: 39,
    progress: 62,
    status: 'relationship'
  },
  {
    firstName: 'chemistry',
    lastName: 'aunt',
    age: 3,
    visits: 2,
    progress: 27,
    status: 'single'
  }
];

const Template: Story = args => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        classNames: [
          'text-center'
        ]
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        classNames: [
          'text-center'
        ]
      },
      {
        Header: 'Age',
        accessor: 'age',
        classNames: [
          'text-right'
        ]
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        classNames: [
          'text-right'
        ]
      },
      {
        Header: 'Status',
        accessor: 'status',
        classNames: [
          'text-center'
        ]
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        classNames: [
          'text-right'
        ]
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    }
  );

  return (
    <MetavaultTableContainer
      className={clsx(
        'space-y-6',
        'container',
        'mx-auto'
      )}>
      <MetavaultTable
        {...args}
        {...getTableProps()}>
        <MetavaultThead>
          {/* TODO: should type properly */}
          {headerGroups.map((headerGroup: any) => (
            // eslint-disable-next-line react/jsx-key
            <MetavaultTr {...headerGroup.getHeaderGroupProps()}>
              {/* TODO: should type properly */}
              {headerGroup.headers.map((column: any) => (
                // eslint-disable-next-line react/jsx-key
                <MetavaultTh
                  {...column.getHeaderProps([
                    {
                      className: clsx(column.classNames),
                      style: column.style
                    }
                  ])}>
                  {column.render('Header')}
                </MetavaultTh>
              ))}
            </MetavaultTr>
          ))}
        </MetavaultThead>
        <MetavaultTbody {...getTableBodyProps()}>
          {/* TODO: should type properly */}
          {rows.map((row: any) => {
            prepareRow(row);

            return (
              // eslint-disable-next-line react/jsx-key
              <MetavaultTr {...row.getRowProps()}>
                {/* TODO: should type properly */}
                {row.cells.map((cell: any) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <MetavaultTd
                      {...cell.getCellProps([
                        {
                          className: clsx(cell.column.classNames),
                          style: cell.column.style
                        }
                      ])}>
                      {cell.render('Cell')}
                    </MetavaultTd>
                  );
                })}
              </MetavaultTr>
            );
          })}
        </MetavaultTbody>
      </MetavaultTable>
    </MetavaultTableContainer>
  );
};

const Default = Template.bind({});
Default.args = {};

export { Default };

export default {
  title: 'UI/MetavaultTable',
  component: MetavaultTable
} as Meta;
