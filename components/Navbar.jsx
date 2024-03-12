"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { RiMenu2Fill } from "react-icons/ri";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-center max-sm:justify-between  gap-10 items-center w-[92%] mx-auto navbar">
      <div className="flex  gap-[120px] items-center">
        <Link href="/">
          <Image
            width={150}
            height={100}
            priority
            src="/BBC-Logo.wine.svg"
            alt="Flowbite Logo"
          />
        </Link>
      </div>
      <div className={`nav-links text-2xl  duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh]  left-0 ${ menuOpen? "top-[9%] font-semibold text-xl  ":"top-[-100%] "} md:w-auto  w-full flex justify-center items-center px-5`}>
        <ul
          className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
        >
          <li>
            <Link
              href="/"
              className="hover:text-purple-700"
              aria-current="page"
              onClick={()=>menuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/top-headlines"
              className="hover:text-purple-700"
              onClick={()=>menuOpen(false)}
            >
              Top Headlines
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
      {menuOpen ? (
        <VscChromeClose onClick={toggleMenu} className="z-10 text-3xl cursor-pointer md:hidden" />
      ) : (
        <RiMenu2Fill onClick={toggleMenu} className="z-10 text-3xl cursor-pointer md:hidden" />
      )}
    </div>
    </nav>
    
  );
};

export default Navbar;  
