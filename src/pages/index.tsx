import React from 'react';
import PageHeader from '@Stories_modules/pageHeader';
import PageFooter from '@Stories_modules/pageFooter';
import LayoutSection from '@Pages/layoutSection';

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
