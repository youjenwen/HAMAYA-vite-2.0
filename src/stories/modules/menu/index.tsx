import React from 'react';
import './menu.scss';
import { Menu as MenuAntd } from 'antd';
import type { MenuProps as MenuPropsAntd } from 'antd';

const item: MenuPropsAntd['items'] = [
  {
    label: '最新消息',
    key: 'news',
    children: [
      {
        type: 'group',
        children: [
          {
            label: '促銷活動',
            key: 'news:1'
          },
          {
            label: '活動快訊',
            key: 'news:2'
          },
          {
            label: '重要通知',
            key: 'news:3'
          },
          {
            label: '音樂文章',
            key: 'news:4'
          }
        ]
      }
    ]
  },
  {
    label: '樂器商城',
    key: 'products',
    children: [
      {
        type: 'group',
        children: [
          {
            label: '最新商品',
            key: 'products:1'
          },
          {
            label: '琴鍵樂器',
            key: 'products:2'
          },
          {
            label: '管樂器',
            key: 'products:3'
          },
          {
            label: '弓弦樂器',
            key: 'products:4'
          },
          {
            label: (
              <div>
                吉他
                <br />
                烏克麗麗
              </div>
            ),
            key: 'products:5'
          },
          {
            label: '打擊樂器',
            key: 'products:6'
          },
          {
            label: '配件',
            key: 'products:7'
          }
        ]
      }
    ]
  },
  {
    label: '音樂教育',
    key: 'class',
    children: [
      {
        type: 'group',
        children: [
          {
            label: '音樂文章',
            key: 'class:1'
          },
          {
            label: '成人課程',
            key: 'class:2'
          },
          {
            label: '兒童課程',
            key: 'class:3'
          }
        ]
      }
    ]
  },
  {
    label: '場地租借',
    key: 'place'
  },
  {
    label: '關於我們',
    key: 'about_us'
  }
];


interface MenuAntdProps {
  mode?: 'vertical' | 'horizontal' | 'inline';
  // inlineCollapsed?: boolean;
}

const Menu = ({ mode = 'horizontal' }: MenuAntdProps) => {
  return (
    <div className="menu--root w-1/2">
      <MenuAntd className="justify-center bg-primary-garyLight" mode={mode} items={item} />
    </div>
  );
};

export default Menu;
