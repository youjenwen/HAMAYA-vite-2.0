import React from 'react';
import { Layout } from 'antd';
const { Header: HeaderAntd } = Layout;

interface HeaderProps {

}

const PageHeader = () => {
    return (
        <HeaderAntd className="text-center text-white bg-[#7dbcea]">
            Header here can import something setting
        </HeaderAntd>

    )
};
export default PageHeader;
