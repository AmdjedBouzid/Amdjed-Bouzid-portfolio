"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { assets } from "../../../public/assets/assets";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";

function NavBar() {
  const sideMenuRef = useRef();
  const { darkMode, toggleDarkMode } = useTheme();

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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] bg-red-500 h-64">
        {/* <img
          src="../public/assets/header-bg-color.png"
          alt=""
          className="w-full"
        /> */}
      </div>

      <nav className="w-full flex px-5 lg:px-8 xl:px-[8%] fixed py-4 z-50 justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-200">
        <Link
          href="#header"
          className="w-28 cursor-pointer mr-14 flex items-center gap-1"
        >
          {/* <Image src={assets.logo} alt="logo" /> */}
          <h1 className="text-[35px] font-bold relative text-gray-900 dark:text-white transition-colors duration-200">
            Amdjed
            <span className="absolute bottom-[25%] -right-3 w-2 h-2 bg-[#FF0066] rounded-full"></span>
          </h1>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-colors duration-200">
          <li>
            <Link
              href="#header"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              Contact me
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt={darkMode ? "Light mode" : "Dark mode"}
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 dark:border-gray-400 rounded-full ml-4 py-2.5 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            Contact{" "}
            <Image
              src={darkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>
          <button className="block md:hidden" onClick={openMenu}>
            <Image
              src={darkMode ? assets.menu_white : assets.menu_black}
              alt=""
              height={25}
              width={25}
            />
          </button>
        </div>
        <ul
          className="flex-col flex gap-5 h-screen md:hidden w-64 bg-white dark:bg-gray-900 fixed top-0 -right-64 py-20 px-10 p-6 z-50 bottom-0 transition-all duration-700"
          ref={sideMenuRef}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={darkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="cursor-pointer w-5"
            />
          </div>
          <li onClick={closeMenu}>
            <Link
              href="#header"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="#about"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              About me
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="#services"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="#projects"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              My Projects
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link
              href="#contact"
              className="font-Ovo text-gray-900 dark:text-white transition-colors duration-200"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
