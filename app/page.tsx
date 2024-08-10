import React from 'react';
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
  title: 'Ekka - Home',
};

// Components
import Newsletter from '@/components/Newsletter/Newsletter';
import BannerSlider from '@/components/BannerSlider/BannerSlider';

const Home = () => {
  return (
    <>
      <Newsletter />
      <BannerSlider />
    </>
  );
};

export default Home;
