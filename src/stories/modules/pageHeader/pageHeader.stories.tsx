import React from 'react';
import { Meta, Story } from '@storybook/react';
import PageHeader from '.';

export default {
    title: 'Modules/PageHeader',
    component: PageHeader
} as Meta<typeof PageHeader>

const Template: Story<typeof PageHeader> = (args) => <PageHeader {...args} />

export const fill = Template.bind({});
fill.args = {
    color: 'primary'
}