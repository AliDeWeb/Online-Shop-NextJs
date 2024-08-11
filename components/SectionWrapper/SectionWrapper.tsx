import React from 'react';

// Types
interface SectionWrapperProps {
  children: JSX.Element;
  title: string;
  description: string;
}

const SectionWrapper = ({
  children,
  title,
  description,
}: SectionWrapperProps) => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="mb-[30px]">
          <h2 className="text-center font-montserrat text-3xl font-bold capitalize text-[#555555]">
            {title}
          </h2>
          <p className="mt-2.5 text-center font-poppins text-sm font-light capitalize text-[#777777]">
            {description}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SectionWrapper;
