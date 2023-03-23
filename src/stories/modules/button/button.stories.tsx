import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '@/stories/modules/button';

//輸出給storybook 頁面顯示的
//title -> 頁面sideBar分類
//component -> 該元件
export default {
  title: 'Modules/Button',
  component: Button
} as Meta<typeof Button>;

const Template: Story<typeof Button> = (args) => <Button type="default" {...args} />;

//顯示在頁面上的controls
export const fill = Template.bind({});
fill.args = {
  type: 'primary',
  color: 'primary',
  text: 'button'
};
