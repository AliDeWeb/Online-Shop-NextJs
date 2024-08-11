import React from 'react';
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
  title: 'Ekka - Home',
};

// Components
import Newsletter from '@/components/Newsletter/Newsletter';
import BannerSlider from '@/components/BannerSlider/BannerSlider';
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper';
import SectionItems from '@/components/SectionWrapper/SectionItems';

const Home = () => {
  return (
    <>
      <Newsletter />
      <BannerSlider />
      <SectionWrapper
        title="our top collection"
        description="browse the collection of top products"
      >
        <div>
          <div>
            <SectionItems />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
