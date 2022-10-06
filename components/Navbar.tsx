import Image from "next/future/image";
import Link from "next/link";

import { FC, useEffect, useState } from "react";

import { Checklist, Menu2, ShoppingCart } from "tabler-icons-react";
import useShop from "../context/ShopContext";

import SideNav from "./SideNav";

type Props = {};

export default function Navbar({}: Props) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setOpenNav(false));
  }, []);

  const NAV_LINKS = [
    {
      name: "Products",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-30 -mx-4 bg-white px-4">
        <header className="flex items-center justify-between  py-4">
          <Logo />

          <nav className="hidden gap-12 md:flex">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.name} passHref>
                <a className="text-lg font-medium transition duration-100 hover:text-purple-500 active:text-purple-700">
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center md:flex lg:justify-start">
            <CartIcon />
            <Link href="/orders" passHref>
              <a>
                <Checklist className="m-2 hover:text-purple-700" />
              </a>
            </Link>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="focus:outline-none md:hidden "
          >
            <Menu2 strokeWidth={2} size={30} color={"black"} />
          </button>
        </header>
      </div>
      <SideNav isOpen={openNav} setOpenNav={() => setOpenNav(!openNav)}>
        <div
          className="s flex h-full flex-col items-center space-y-6 px-2"
          onClick={() => setOpenNav(false)}
        >
          <div className="mt-4">
            <Logo />
          </div>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.name} passHref>
              <a className="text-lg font-medium transition duration-100 hover:text-purple-500 active:text-purple-700">
                {link.name}
              </a>
            </Link>
          ))}
          <div className="flex gap-2">
            <CartIcon />
            <Link href="/orders" passHref>
              <a>
                <Checklist className="m-2 hover:text-purple-700" />
              </a>
            </Link>
          </div>
        </div>
      </SideNav>
    </>
  );
}

const CartIcon: FC = () => {
  const { totalCartQuantity } = useShop();
  return (
    <Link href="/cart">
      <div className="relative inline-flex cursor-pointer items-center p-2 text-center text-sm">
        <ShoppingCart className="hover:text-purple-700" />
        {totalCartQuantity > 0 && (
          <div className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-purple-500 text-xs font-bold text-white ">
            {totalCartQuantity}
          </div>
        )}
      </div>
    </Link>
  );
};

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          priority
          width={100}
          height={26}
          className="h-auto max-w-full cursor-pointer"
          src="/logo-astha.svg"
          alt="asthait-logo"
        />
      </a>
    </Link>
  );
};
