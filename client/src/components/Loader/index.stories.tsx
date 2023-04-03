import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from '.';

export default {
  title: 'Components/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const DefaultLoader = Template.bind({});
