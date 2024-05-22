import clsx from "clsx";
import React from "react";
import { IoClose } from "react-icons/io5";

interface OpenMapProps {
  openMenu: boolean;
  setOpenMenu: (isOpen: boolean) => void;
}

export const NavMobile = ({ openMenu, setOpenMenu }: OpenMapProps) => {
  const closeMenu = () => {
    setOpenMenu(false);
    console.log("tutup");
  };
  return (
    <div
      className={clsx(
        "w-9/12 h-screen bg-font backdrop-blur-lg z-50 top-0 absolute text-white transition-all",
        openMenu ? "right-0" : "-right-96"
      )}
    >
      <button className="float-right text-3xl pt-6 pr-8" onClick={closeMenu}>
        <IoClose />
      </button>
      <div className="p-12">
        <ul className="py-6 space-y-12 text-3xl text-center">
          <li>Home</li>
          <li>Work</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
