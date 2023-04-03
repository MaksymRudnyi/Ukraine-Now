import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardGroup } from '.';

export default {
  title: 'Components/CardGroup',
  component: CardGroup
} as ComponentMeta<typeof CardGroup>;

const Template: ComponentStory<typeof CardGroup> = (args) => <CardGroup {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = { cards: [{title: "title", value: "value", helpText: "helpText"} ] };

