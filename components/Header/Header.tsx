import Link from 'next/link';
import Image from 'next/image';

// Components
import Search from '../Forms/Search';
import HeaderIcons from './HeaderIcons';
import MobileNav from './MobileNav';

// Images
import logo from '@/public/icons/logo.png';

// Contexts
import HamburgerMenuProvider from '@/context/hamburgerMenuContext';

const Header = () => {
  return (
    <HamburgerMenuProvider>
      <header className="border-b border-solid border-black/5 pb-[25px] lg:py-[25px]">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
            <div>
              <Link href="/">
                <Image
                  priority={true}
                  src={logo}
                  alt="site logo"
                  width={130}
                  height={40}
                  className="h-10 w-[130px]"
                />
              </Link>
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
