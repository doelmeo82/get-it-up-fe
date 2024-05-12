import React from "react";
import logowhite from "../../image/Navbar/logo_main.png";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#99FF33] grid gap-10 grid-cols-1 lg:grid-cols-2 px-[24px] h-full py-[36px] border-t-2 border-[#272829] text-[#000000]">
      <div className="flex flex-col justify-between gap-y-[15px]">
        <img src={logowhite} alt="logo-icon" className="w-[250px]" />
        <div className="flex gap-x-3">
          <div className="text-gray w-[50px] h-[50px] bg-[rgba(54,59,71,0.40)] flex justify-center items-center">
            <BsFacebook className="text-[22px]" />
          </div>
          <div className="text-gray w-[50px] h-[50px] bg-[rgba(54,59,71,0.40)] flex justify-center items-center">
            <AiOutlineInstagram className="text-[22px]" />
          </div>
          <div className="text-gray w-[50px] h-[50px] bg-[rgba(54,59,71,0.40)] flex justify-center items-center">
            <FaTwitter className="text-[22px]" />
          </div>
        </div>
        <div className="flex gap-x-2">
          <Link to="">Policy</Link>
          <div className="w-[1px] h-full bg-slate-600"></div>
          <Link to="">Security</Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-2">
          <div>
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-white">
                <Link to="">About us</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Contact</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Helps</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Policies</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-white">
                <Link to="">Themes</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Wish list</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Hot themes</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right font-semibold">© 2024 Get it up, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
