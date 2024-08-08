// Components
import Search from "../Forms/Search";
import HeaderIcons from "./HeaderIcons";
import MobileNav from "./MobileNav";

// Images
import Image from "next/image";
import logo from "@/public/icons/logo.png";

const Header = () => {
  return (
    <header className="pb-[25px] sm:py-[25px] border-b border-solid border-black/5">
      <div className="container">
        <div className="sm:hidden">
          <MobileNav />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
          <div>
            <Image
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
  );
};

export default Header;
