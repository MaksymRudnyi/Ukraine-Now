import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Error } from '.';

export default {
  title: 'Components/Error',
  component: Error,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const SimpleError = Template.bind({});
SimpleError.args = {};
