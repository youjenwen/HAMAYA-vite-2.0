import React from 'react';
import PageHeader from '@/stories/modules/pageHeader';
import PageFooter from '@/stories/modules/pageFooter';
import LayoutSection from '@/page/layoutSection';

const PageLayout = () => {
  return (
    <>
      <PageHeader />
      <LayoutSection />
      <PageFooter />
    </>
  );
};

export default PageLayout;
