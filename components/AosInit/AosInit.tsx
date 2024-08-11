'use client';

import React from 'react';

// AosCss
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInit = () => {
  // Effects
  React.useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      once: false,
      duration: 800,
      delay: 30,
    });
  }, []);

  return <></>;
};

export default AosInit;
