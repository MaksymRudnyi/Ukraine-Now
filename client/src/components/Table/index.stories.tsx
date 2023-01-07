import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '.';
import corruption from '../../mocks/corruption-2021.json';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const columns = [
  {
    id: 'score',
    accessorKey: 'score',
    header: 'Score',
    size: 58,
  },
  {
    id: 'country',
    accessorKey: 'country',
    header: 'Country',
    cell: (info) => info.getValue(),
    align: 'right',
  },
  {
    id: 'rank',
    accessorKey: 'rank',
    header: 'Rank',
    cell: (info) => info.getValue(),
    size: 74,
  },
];

const data = corruption.filter(({ year }) => year === 2021);

export const Test = Template.bind({});
Test.args = {
  columns,
  data,
};
