import Image from "next/future/image";
import Link from "next/link";

import { FC, useEffect, useState } from "react";

import { Checklist, Menu2, ShoppingCart } from "tabler-icons-react";

import SideNav from "./SideNav";
import Logo from "../public/logo-astha.svg";

type Props = {};

export default function Navbar({}: Props) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setOpenNav(false));
  }, []);

  return (
    <>
      <div>
        <header className="flex justify-between items-center py-4 ">
          <Link href="/">
            <Image
              width={100}
              height={26}
              className="max-w-full cursor-pointer h-auto"
              src="/logo-astha.svg"
              alt="asthait-logo"
            />
          </Link>

          <nav className="hidden md:flex gap-12">
            <Link href="/" passHref>
              <a className=" hover:text-purple-500 active:text-purple-700 text-lg transition duration-100 font-medium">
                Our Products
              </a>
            </Link>

            <Link href="/" passHref>
              <a className=" hover:text-purple-500 active:text-purple-700 text-lg transition duration-100 font-medium">
                Contact
              </a>
            </Link>

            <Link href="/" passHref>
              <a className=" hover:text-purple-500 active:text-purple-700 text-lg transition duration-100 font-medium">
                About
              </a>
            </Link>
          </nav>

          <div className="hidden md:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <CartIcon carItemCount={69} />
            <Link href="/orders">
              <Checklist className="m-2 cursor-pointer" strokeWidth={2} color={"black"} />
            </Link>
          </div>
          <button onClick={() => setOpenNav(!openNav)} className="md:hidden focus:outline-none ">
            <Menu2 strokeWidth={2} size={30} color={"black"} />
          </button>
        </header>
      </div>
      <SideNav isOpen={openNav} setOpenNav={() => setOpenNav(false)}>
        <div className="h-full bg-purple-700 space-y-6 px-2 flex items-center flex-col">
          <Link href="/">
            <Image
              width={100}
              height={26}
              className="max-w-full h-auto mt-4 cursor-pointer"
              src="/logo-astha.svg"
              alt="asthait-logo"
            />
          </Link>
          <Link href="/">
            <a className=" hover:text-white active:text-white text-lg transition duration-100 font-medium">
              Our Products
            </a>
          </Link>

          <Link href="/">
            <a className=" hover:text-white active:text-white text-lg transition duration-100 font-medium">Contact</a>
          </Link>

          <Link href="/">
            <a className=" hover:text-white active:text-white text-lg transition duration-100 font-medium">About</a>
          </Link>
          <div className="flex gap-2">
            <CartIcon carItemCount={69} />
            <Link href="/orders">
              <Checklist className="m-2 cursor-pointer" strokeWidth={2} color={"black"} />
            </Link>
          </div>
        </div>
      </SideNav>
    </>
  );
}

interface CartIconProps {
  carItemCount: number;
}

const CartIcon: FC<CartIconProps> = ({ carItemCount }) => {
  return (
    <Link href="/cart">
      <div className="inline-flex relative items-center p-2 text-sm text-center cursor-pointer">
        <ShoppingCart strokeWidth={2} color="black" />
        {carItemCount > 0 && (
          <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-purple-500 rounded-full border-2 border-white ">
            {carItemCount}
          </div>
        )}
      </div>
    </Link>
  );
};
