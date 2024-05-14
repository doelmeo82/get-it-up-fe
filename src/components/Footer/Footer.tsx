import React from "react";
import logowhite from "../../image/Navbar/logo_main.png";
import { BsFacebook, BsTiktok, BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#99FF33] grid gap-10 grid-cols-1 lg:grid-cols-2 px-[24px] h-full py-[36px] border-t-2 border-[#272829] text-[#000000]">
      <div className="flex flex-col justify-between gap-y-[15px]">
        <img src={logowhite} alt="logo-icon" className="w-[250px]" />
        <div className="flex gap-x-3">
          <div className="text-[#0408e7] w-[50px] h-[50px] flex justify-center items-center">
            <a href="https://www.facebook.com/profile.php?id=61559705909070">
              <BsFacebook className="text-[26px]" />
            </a>
          </div>
          <div className="text-[#e84bb4] w-[50px] h-[50px] flex justify-center items-center">
            <FaInstagram className="text-[26px]" />
          </div>
          <div className="text-[#45c0de] w-[50px] h-[50px] flex justify-center items-center">
            <a href="https://twitter.com/GetItUpWeb2024">
              <FaTwitter className="text-[26px]" />
            </a>
          </div>
          <div className="text-[#ff2626] w-[50px] h-[50px] flex justify-center items-center">
            <a href="https://www.youtube.com/channel/UCFFaJBSURFehVVfqJFfmDmA">
              <BsYoutube className="text-[26px]" />
            </a>
          </div>
          <div className="text-[#0a0a0a] w-[50px] h-[50px] flex justify-center items-center">
            <a href="https://www.tiktok.com/@get.it.up4?_t=8mL5NcQmulb&_r=1">
              <FaTiktok className="text-[26px]" />
            </a>
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
              <li className="hover:text-[#FF4500]">
                <Link to="">About us</Link>
              </li>
              <li className="hover:text-[#FF4500]">
                <Link to="">Contact</Link>
              </li>
              <li className="hover:text-[#FF4500]">
                <Link to="">Helps</Link>
              </li>
              <li className="hover:text-[#FF4500]">
                <Link to="">Policies</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-[#FF4500]">
                <Link to="">Themes</Link>
              </li>
              <li className="hover:text-[#FF4500]">
                <Link to="">Wish list</Link>
              </li>
              <li className="hover:text-[#FF4500]">
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
