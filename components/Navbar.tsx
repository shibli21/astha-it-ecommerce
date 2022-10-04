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

  return (
    <>
      <div className="sticky top-0 z-30 -mx-4 bg-white px-4">
        <header className="flex items-center justify-between  py-4">
          <Link href="/">
            <Image
              priority
              width={100}
              height={26}
              className="h-auto max-w-full cursor-pointer"
              src="/logo-astha.svg"
              alt="asthait-logo"
            />
          </Link>

          <nav className="hidden gap-12 md:flex">
            <Link href="/" passHref>
              <a className=" text-lg font-medium transition duration-100 hover:text-purple-500 active:text-purple-700">
                Our Products
              </a>
            </Link>

            <Link href="/" passHref>
              <a className=" text-lg font-medium transition duration-100 hover:text-purple-500 active:text-purple-700">
                Contact
              </a>
            </Link>

            <Link href="/" passHref>
              <a className=" text-lg font-medium transition duration-100 hover:text-purple-500 active:text-purple-700">
                About
              </a>
            </Link>
          </nav>

          <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center md:flex lg:justify-start">
            <CartIcon />
            <Link href="/orders">
              <Checklist
                className="m-2 cursor-pointer"
                strokeWidth={2}
                color={"black"}
              />
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
          <Link href="/">
            <Image
              priority
              width={100}
              height={26}
              className="mt-4 h-auto max-w-full cursor-pointer"
              src="/logo-astha.svg"
              alt="asthait-logo"
            />
          </Link>
          <Link href="/">
            <a className=" text-lg font-medium transition duration-100 hover:text-purple-600 active:text-purple-700">
              Our Products
            </a>
          </Link>

          <Link href="/">
            <a className=" text-lg font-medium transition duration-100 hover:text-purple-600 active:text-purple-700">
              Contact
            </a>
          </Link>

          <Link href="/">
            <a className=" text-lg font-medium transition duration-100 hover:text-purple-600 active:text-purple-700">
              About
            </a>
          </Link>
          <div className="flex gap-2">
            <CartIcon />
            <Link href="/orders">
              <Checklist
                className="m-2 cursor-pointer"
                strokeWidth={2}
                color={"black"}
              />
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
        <ShoppingCart strokeWidth={2} color="black" />
        {totalCartQuantity > 0 && (
          <div className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-purple-500 text-xs font-bold text-white ">
            {totalCartQuantity}
          </div>
        )}
      </div>
    </Link>
  );
};
