import React from "react";

// Components
import Header from "@/components/Header/Header";

const Template = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Template;
