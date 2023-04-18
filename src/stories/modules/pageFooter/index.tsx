import React from 'react';
import { Layout, Image } from 'antd';
const { Footer: FooterAntd } = Layout;
import Button from '@Stories_modules/button';
import SvgIcon from '@Stories_modules/svgIcon';
import line from '@Images/line.svg';
import footer_hamaya from '@Images/footer-hamaya.svg';
import footer_music from '@Images/footer-music.svg';

const PageFooter = () => {
  return (
    <div className="footer--root">
      <FooterAntd className="bg-primary-gary px-0">
        <div className="flex justify-center w-full gap-4 px-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-4">
              <Image preview={false} src={footer_hamaya} />
              <Image className="text-end" preview={false} src={footer_music} />
            </div>
            <div className="p-0 text-primary-garyLight">
              <p>TEL: 06-6946-5820/ FAX: 06-7635-8075</p>
              <p>MAIL: service@gmail.com</p>
              <p>MON.-FRI. 09:00-12:00 / 13:00-18:00</p>
            </div>
          </div>
          <div className="flex gap-4 text-primary-garyLight">
            <div className="text-center">
              <h6>最新消息</h6>
              <Button className="text-small text-primary-garyLight" type="link" text="促銷活動" />
              <Button className="text-small text-primary-garyLight" type="link" text="活動快訊" />
              <Button className="text-small text-primary-garyLight" type="link" text="重要通知" />
              <Button className="text-small text-primary-garyLight" type="link" text="音樂文章" />
            </div>
            <div className="text-center">
              <h6>樂器商城</h6>
              <Button className="text-small text-primary-garyLight" type="link" text="最新商品" />
            </div>
            <div className="text-center">
              <h6>音樂教育</h6>
              <Button className="text-small text-primary-garyLight" type="link" text="成人課程" />
              <Button className="text-small text-primary-garyLight" type="link" text="兒童課程" />
              <Button className="text-small text-primary-garyLight" type="link" text="師資介紹" />
            </div>
            <div className="text-center">
              <h6>場地租借</h6>
            </div>
            <div className="text-center">
              <h6>關於我們</h6>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center gap-4">
              <SvgIcon iconName="fb" />
              <SvgIcon iconName="youtube" />
              <SvgIcon iconName="media_line" />
            </div>
            <p className="text-primary-garyLight">© HAMAYA All Rights Reserved.</p>
          </div>
        </div>
        <div>
          <Image preview={false} src={line} />
        </div>
      </FooterAntd>
    </div>
  );
};

export default PageFooter;
