import Link from "next/link";

// Components
import Search from "../Forms/Search";
import HeaderIcons from "./HeaderIcons";

// Images
import Image from "next/image";
import logo from "@/public/icons/logo.png";

const Header = () => {
  return (
    <header className="py-[25px] border-b border-solid border-black/5">
      <div className="container">
        <div className="flex items-center justify-between">
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
          <div>
            <HeaderIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
