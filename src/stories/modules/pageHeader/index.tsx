import React from 'react';
import { Layout, Image } from 'antd';
const { Header: HeaderAntd } = Layout;
import Menu from '@Stories_modules/menu';
import Button from '@Stories_modules/button';
import SvgIcon from '@Stories_modules/svgIcon';
import Logo from '@Images/logo-white.svg';
import './pageHeader.scss';

const PageHeader = () => {
  return (
    <>
      <HeaderAntd className="flex items-center justify-center gap-3 bg-primary-garyLight text-white">
        <Image className="" preview={false} src={Logo} />
        <Menu />
        <Button
          className="bg-primary-garyLight"
          icon={
            <SvgIcon
              wrapperStyle="flex items-center justify-center"
              iconName="users"
              svgProp={{ width: 25, height: 25 }}
            />
          }
        />
        <Button
          className="bg-primary-garyLight"
          icon={
            <SvgIcon
              wrapperStyle="flex items-center justify-center"
              iconName="shopping_cart"
              svgProp={{ width: 25, height: 25 }}
            />
          }
        />
        <Button
          className="bg-primary-garyLight"
          icon={
            <SvgIcon
              wrapperStyle="flex items-center justify-center"
              iconName="logout"
              svgProp={{ width: 25, height: 25 }}
            />
          }
        />
      </HeaderAntd>
    </>
  );
};
export default PageHeader;
