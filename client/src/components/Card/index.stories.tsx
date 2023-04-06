import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = { value: 'value', helpText: "helpText", title: "title" };

export const ComplexCard = Template.bind({})
ComplexCard.args = {
    value: <h1>$20000</h1>,
    title: <b>GDP</b>
}

export const ActiveCard = Template.bind({})
ActiveCard.args = {
    value: <h1>$20000</h1>,
    title: <b>GDP</b>,
    isActive: true
}

