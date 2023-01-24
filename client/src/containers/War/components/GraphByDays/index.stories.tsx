import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GraphByDays } from '.';
import warHistory from '../../../../mocks/war-history-21.01.2023.json';

export default {
  title: 'Containers/War/GraphByDays',
  component: GraphByDays,
  parameters: {
    layout: 'fullscreen',
    mockData: [
      {
        url: 'http://127.0.0.1:5001/ukraine-now/us-central1/api/war/history',
        method: 'GET',
        status: 200,
        response: warHistory,
      },
    ],
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'personnel_units',
        'tanks',
        'armoured_fighting_vehicles',
        'artillery_systems',
        'mlrs',
        'aa_warfare_systems',
        'planes',
        'helicopters',
        'vehicles_fuel_tanks',
        'warships_cutters',
        'cruise_missiles',
        'uav_systems',
        'special_military_equip',
        'atgm_srbm_systems',
      ],
    },
  },
} as ComponentMeta<typeof GraphByDays>;

const Template: ComponentStory<typeof GraphByDays> = (args) => (
  <GraphByDays {...args} />
);

export const TabsView = Template.bind({});
TabsView.args = {
  type: 'tanks',
};
