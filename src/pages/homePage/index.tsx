import HomeService from '@Components/homeService';
import VideoBanner from '@Stories_components/videoBanner';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <VideoBanner />
      {/* TODO: 有一個 幻燈箱 */}
      <HomeService />
    </div>
  );
};

export default HomePage;
