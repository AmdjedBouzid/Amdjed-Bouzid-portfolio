import Image from "next/image";
import React, { useRef } from "react";
import { assets } from "@/public/assets/assets";
import Link from "next/link";

function NavBar() {
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full flex px-5 lg:px-8 xl:px-[8%] fixed py-4 z-50 justify-between">
        <Link href="" className="w-28 cursor-pointer mr-14">
          <Image src={assets.logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 bg-white">
          <li>
            <Link href="#top" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-Ovo">
              About me
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-Ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="font-Ovo">
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-Ovo">
              Contact me
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 py-2.5"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" height={25} width={25} />
          </button>
        </div>
        <ul
          className="flex-col flex gap-5 h-screen md:hidden w-64 bg-rose-50 fixed top-0 -right-64 py-20 px-10 p-6 z-50 bottom-0 transition duration-700"
          ref={sideMenuRef}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=" "
              className="cursor-pointer w-5"
            />
          </div>
          <li onClick={closeMenu}>
            <Link href="#top" className="font-Ovo">
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#about" className="font-Ovo">
              About me
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#services" className="font-Ovo">
              Services
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#work" className="font-Ovo">
              My Work
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="#contact" className="font-Ovo">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
