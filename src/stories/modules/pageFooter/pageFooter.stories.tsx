import React from 'react';
import { Meta, Story } from '@storybook/react';
import PageFooter from '@Stories_modules/pageFooter';

export default {
  title: 'Modules/PageFooter',
  component: PageFooter
} as Meta<typeof PageFooter>;

const Template: Story<typeof PageFooter> = (args: any) => <PageFooter {...args} />;

export const fill = Template.bind({});
fill.args = {
  color: 'primary'
};
