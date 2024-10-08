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
          <h2
            data-aos="fade-down"
            className="text-center font-montserrat text-xl font-bold capitalize text-[#555555] sm:text-2xl lg:text-3xl"
          >
            {title}
          </h2>
          <p
            data-aos="fade-down"
            className="mt-2.5 text-center font-poppins text-sm font-light capitalize text-[#777777]"
          >
            {description}
          </p>
        </div>
        <div data-aos="fade-down">{children}</div>
      </div>
    </div>
  );
};

export default SectionWrapper;
