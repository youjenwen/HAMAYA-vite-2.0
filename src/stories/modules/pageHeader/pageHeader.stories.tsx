import React from 'react';
import { Meta, Story } from '@storybook/react';
import PageHeader from '@Stories_modules/pageHeader';

export default {
  title: 'Modules/PageHeader',
  component: PageHeader
} as Meta<typeof PageHeader>;

const Template: Story<typeof PageHeader> = (args: any) => <PageHeader {...args} />;

export const fill = Template.bind({});
fill.args = {
  color: 'primary'
};
