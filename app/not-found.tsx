'use client';

import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
  title: 'Ekka - Page Not Found...',
};

// Images
import icon404 from '@/public/icons/404.png';

const NotFound = () => {
  // Refs
  const section404 = React.useRef<null | HTMLDivElement>(null);

  // Effects
  React.useEffect(() => {
    if (!section404) return;

    section404.current?.scrollIntoView();
  }, []);

  return (
    <div
      ref={section404}
      className="flex min-h-[100dvh] items-center justify-center py-5"
    >
      <div className="flex w-full flex-col items-center px-5">
        <Image
          src={icon404}
          alt="icon 404"
          width={500}
          height={300}
          className="w-[350px] md:w-[500px]"
        />
        <h1 className="text-center font-poppins text-xl font-bold md:text-3xl">
          Oops, looks like the page is lost.
        </h1>
        <p className="mt-2 text-center font-poppins font-normal">
          This is not a fault, just an accident that was not intentional.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
