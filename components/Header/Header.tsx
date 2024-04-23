import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-4 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap item-center justify-between">
      <div className="flex items-center w-ful md:2/3">
        <Link href={"/"} className="font-black ">
          Vedanti Technology
        </Link>
      </div>
      <ul className="flex item-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-light">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-light">
          <Link href={"/services"}>Services</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-light">
          <Link href={"/products"}>Products</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-light">
          <Link href={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
