"use client";

import React from "react";

export const hamburgerMenuContext = React.createContext({
  isHamburgerMenuOpen: false,
  setIsHamburgerMenuOpen: (open: boolean) => {},
});

const HamburgerMenuProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);

  return (
    <hamburgerMenuContext.Provider
      value={{ isHamburgerMenuOpen, setIsHamburgerMenuOpen }}
    >
      {children}
    </hamburgerMenuContext.Provider>
  );
};

export default HamburgerMenuProvider;
