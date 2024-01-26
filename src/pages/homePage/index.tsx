import HomeService from '@Components/homeService';
import ArticleSection from '@Stories_components/articleSection';
import VideoBanner from '@Stories_components/videoBanner';
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-primary-garyLight">
      {/* <VideoBanner /> */}
      {/* TODO: 有一個 幻燈箱 */}
      {/* max:md 小於 768px有效果 md:大於768px有效果 */}
      <HomeService />
      <div className="mt-[70px] flex h-[300px] items-center justify-center bg-primary-gary bg-cover text-primary-parallax max-md:mt-[20px] xl:h-[180px]">
        <h1 className="text-center text-[25px] text-primary-beige max-md:my-8 max-md:mx-12 max-md:text-[15px]">
          音樂之目的有二，一是以純淨之和聲愉悅人的感官，二是令人感動或激發人的熱情。—羅傑·諾斯
        </h1>
      </div>
      <ArticleSection />
    </div>
  );
};

export default HomePage;
