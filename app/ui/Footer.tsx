import React from "react";
import { Logo } from "./Logo";
import { FaFacebookSquare , FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LinkedFooter } from "./LinkedFooter";

export const Footer = () => {
  return (
    <footer className="bg-font py-20">
      <div className="container flex justify-between">
        <div className="w-4/12 px-14 ">
          <Logo />
          <h3 className="text-gray-300 font-bold py-10 w-10/12">
            350 Canal St, New York, USA wpelite.com@gmail.com +1123456788
          </h3>
          <ul className="flex items-center text-gray-300 text-3xl gap-x-8">
            <li>
              <FaFacebookSquare  />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
        <LinkedFooter />
      </div>
    </footer>
  );
};
