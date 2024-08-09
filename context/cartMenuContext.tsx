'use client';

import React from 'react';

export const cartMenuContext = React.createContext({
  isCartMenuOpen: false,
  setIsCartMenuOpen: (open: boolean) => {},
});

const CartMenuProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [isCartMenuOpen, setIsCartMenuOpen] = React.useState<boolean>(false);

  return (
    <>
      <cartMenuContext.Provider value={{ isCartMenuOpen, setIsCartMenuOpen }}>
        {children}
      </cartMenuContext.Provider>
    </>
  );
};

export default CartMenuProvider;
