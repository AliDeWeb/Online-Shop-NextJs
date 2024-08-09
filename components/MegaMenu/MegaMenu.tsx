import React from 'react';
import Link from 'next/link';

// Types
interface MegaMenuProps {
  className: string;
  isActive: boolean;
  items: { title: string; link: string }[];
  setIsActive: any;
}

const MegaMenu = ({
  className,
  isActive,
  items,
  setIsActive,
}: MegaMenuProps) => {
  // Callbacks
  const clickHandler = React.useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div
      className={`${
        isActive ? 'visible opacity-100' : 'invisible opacity-0'
      } ${className} min-w-[125px] border border-solid border-[#d9d9d9] bg-white px-2.5 py-1 shadow-sm transition-all`}
    >
      <ul className="divide-y divide-solid divide-red-50 font-poppins text-sm font-light text-[#777777] child:py-1.5 child:transition-all hover:child:text-[#444444]">
        {items.map((el) => (
          <li key={`${el.title}${el.link}-${Math.random()}`}>
            <Link onClick={clickHandler} href={el.link}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
