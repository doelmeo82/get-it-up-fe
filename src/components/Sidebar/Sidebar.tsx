import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMessage } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import logo from "../../image/Navbar/sidebar.svg";

const Sidebar = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/teacher/${id}`);
  };
  return (
    <div className="text-[#8C94A3]">
      <div className="py-[12px] border-b-[1px] border-[#8C94A3]">
        <img src={logo} alt="" />
      </div>
      <div className="py-[12px]">
        <div
          onClick={() => handleNavigate("dashboard")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("dashboard") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <BsBarChartFill className="text-[18px]" />
          <span>Tổng quan</span>
        </div>
        <div
          onClick={() => handleNavigate("create-course")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("create-course") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <AiOutlinePlusCircle className="text-[18px]" />
          <span>Tạo khóa học mới</span>
        </div>
        <div
          onClick={() => handleNavigate("create-combo")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("create-combo") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <AiOutlinePlusCircle className="text-[18px]" />
          <span>Tạo Combo khóa học</span>
        </div>
        <div
          onClick={() => handleNavigate("create-way")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("create-way") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <AiOutlinePlusCircle className="text-[18px]" />
          <span>Tạo lộ trình</span>
        </div>
        <div
          onClick={() => handleNavigate("courses")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("courses") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <FaLayerGroup className="text-[18px]" />
          <span>Khóa học của tôi</span>
        </div>
        <div
          onClick={() => handleNavigate("message")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("message") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <AiOutlineMessage className="text-[18px]" />
          <span>Tin nhắn</span>
        </div>
        <div
          onClick={() => handleNavigate("setting")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("setting") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <FiSettings className="text-[18px]" />
          <span>Cài đặt</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
