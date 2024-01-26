import React from 'react';
import { Layout, Image } from 'antd';
import { Link } from 'react-router-dom';
import Menu from '@Stories_modules/menu';
import Button from '@Stories_modules/button';
import SvgIcon from '@Stories_modules/svgIcon';
import Logo from '@Images/logo-white.svg';
import './pageHeader.scss';
import './index.css';
const { Header: HeaderAntd } = Layout;

const PageHeader = () => {
  return (
    <div id='mfood-header'>
      {/* <HeaderAntd className=" z-30 flex max-md:h-[90px] h-[130px] items-center justify-center gap-3 bg-primary-garyLight text-white shadow-2xl"> */}
        {/* <Link to="/">
          <Image preview={false} src={Logo} />
        </Link>
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
        /> */}
      {/* </HeaderAntd> */}
      <ul
        className="mfood-header-wrapper"
        style={{ paddingTop: '8px' }}
      >
        <li className={"flex-1"}>
          {/* {this.props.showBackButton ? (
            <button
              type="button"
              onClick={() => {
                if (
                  window.location.pathname.split("/").pop() === "mfood" ||
                  window.location.pathname.split("/").pop() ===
                    "mfoodTokenError"
                ) {
                  (dsbridge as any).call("backToHomePage");
                } else {
                  (dsbridge as any).call("back");
                }
              }}
            >
              {this.props.backButtonColor === "black" ? (
                <img src="/_ui/shared/common/images/mfood/arrow-black-left.svg"></img>
              ) : (
                <img src="/_ui/shared/common/images/mfood/arrow-white-left.svg"></img>
              )}
            </button>
          ) : (
            <div></div>
          )} */}
        </li>
        {/* {this.props.styleType === "search" ? (
          <input></input>
        ) : ( */}
          <li className="mfoodLogoWrapper flex-1">
            <a
              href='www.google.com'
            >
              {/* {this.props.text == "" ? (
                this.props.styleType === "default" && this.props.text === "" ? (
                  <img
                    className="mfood__logo"
                    src="/_ui/shared/common/images/mfood/logo-large.png"
                  ></img>
                ) : (
                  <img
                    className="mfood__logo"
                    src="/_ui/shared/common/images/mfood/logo-white.svg"
                  ></img>
                )
              ) : (
                <div className="header-title">{this.props.text}</div>
              )} */}
            </a>
          </li>
        {/* )} */}
        {/* {this.props.styleType === "search" ? (
          <div></div>
        ) : ( */}
          <li className="flex-1 justify-end">
            {/* {this.props.showCartButton ? ( */}
              <a className="relative"
                href='www.google.com'
              >
                <img src="" width={100} height={100}></img>
                {/* {this.props.miniCartData > 0 ? (
                  <div className="cartPoint">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                    >
                      <circle cx="4" cy="4" r="4" fill="#EE4054" />
                    </svg>
                  </div>
                ) : (
                  <div></div>
                )} */}
              </a>
            {/* ) : (
              <div></div>
            )} */}
          </li>
        {/* )} */}
        {/* {this.props.styleType === "landing" ? ( */}
          <div className="mfood-landing-bg"></div>
        {/* ) : (
          <div></div>
        )} */}
      </ul>

    </div>
  );
};
export default PageHeader;
