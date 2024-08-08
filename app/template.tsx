import React from "react";

// Components
import Header from "@/components/Header/Header";
import MobileToolBar from "@/components/MobileToolBar/MobileToolBar";

const Template = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Header />
      {children}
      <MobileToolBar />
    </div>
  );
};

export default Template;
