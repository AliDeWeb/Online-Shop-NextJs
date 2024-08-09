import React from 'react';
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
  title: 'Ekka - Home',
};

// Components
import Newsletter from '@/components/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <Newsletter />
    </>
  );
};

export default Home;
