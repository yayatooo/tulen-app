"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { ButtonComponents } from "./ButtonComponents";
import { NavMobile } from "./NavMobile";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickMenu = () => {
    setOpenMenu(true);
    console.log("open");
    
  };

  return (
    <>
      <nav className="fixed w-full z-50">
        <section className="container flex justify-between items-center py-7 relative z-30">
          <Image src="./logo.svg" width={120} height={38} alt="logo" />
          <ul className="xs:hidden xl:flex font-bold gap-10 text-lg">
            <li>Home</li>
            <li>Work</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
          <div className="xs:hidden xl:inline-block">
            <ButtonComponents variant="default">Get the App</ButtonComponents>
          </div>
          <button className="text-4xl" onClick={clickMenu}>
            <IoMenu />
          </button>
        </section>
      <NavMobile openMenu={openMenu} setOpenMenu={setOpenMenu}  />
      </nav>
    </>
  );
};
