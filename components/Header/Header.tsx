import Link from "next/link";

// Components
import Search from "../Forms/Search";

// Images
import Image from "next/image";
import logo from "@/public/icons/logo.png";

// Icons
import { CiUser, CiHeart } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";

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
          <div className="flex items-center gap-6 text-[##444444] hover:child:text-[#3474d4] child:transition-all">
            <Link href={"/"}>
              <CiUser size={"1.6em"} />
            </Link>

            <Link href={"/"} className="relative">
              <span className="absolute -bottom-[6px] -right-[8px] size-5 rounded-full bg-[#777777] font-poppins flex items-center justify-center text-white text-sm">
                6
              </span>
              <CiHeart size={"1.8em"} />
            </Link>

            <Link href={"/"} className="relative">
              <span className="absolute -bottom-[6px] -right-[8px] size-5 rounded-full bg-[#777777] font-poppins flex items-center justify-center text-white text-sm">
                6
              </span>
              <PiShoppingCartSimple size={"1.6em"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
