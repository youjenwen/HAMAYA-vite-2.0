import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import PageHeader from '@Stories_modules/pageHeader';
import PageFooter from '@Stories_modules/pageFooter';

const Layout = () => {
  return (
    <AntdLayout>
      <PageHeader />
      <Outlet />
      {/* <PageFooter /> */}
    </AntdLayout>
  );
};

export default Layout;
