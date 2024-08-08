// Components
import Search from "../Forms/Search";
import HeaderIcons from "./HeaderIcons";
import MobileNav from "./MobileNav";

// Images
import Image from "next/image";
import logo from "@/public/icons/logo.png";

// Contexts
import HamburgerMenuProvider from "@/context/hamburgerMenuContext";

const Header = () => {
  return (
    <HamburgerMenuProvider>
      <header className="pb-[25px] lg:py-[25px] border-b border-solid border-black/5">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
            <div>
              <Image
                priority={true}
                src={logo}
                alt="site logo"
                width={130}
                height={40}
                className="w-[130px] h-10"
              />
            </div>
            <div>
              <Search />
            </div>
            <div className="hidden lg:block">
              <HeaderIcons />
            </div>
          </div>
        </div>
      </header>
    </HamburgerMenuProvider>
  );
};

export default Header;
