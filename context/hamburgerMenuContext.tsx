"use client";

import React from "react";

export const hamburgerMenuContext = React.createContext({
  isHamburgerMenuOpen: true,
  setIsHamburgerMenuOpen: (open: boolean) => {},
});

const HamburgerMenuProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  // TODO: "this should be false"
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(true);

  return (
    <hamburgerMenuContext.Provider
      value={{ isHamburgerMenuOpen, setIsHamburgerMenuOpen }}
    >
      {children}
    </hamburgerMenuContext.Provider>
  );
};

export default HamburgerMenuProvider;
