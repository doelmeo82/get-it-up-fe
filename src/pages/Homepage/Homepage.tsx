import React from "react";
import banner from "../../image/Navbar/slide_main.2321b7cd2f56dec33db2.png";
import Partner from "./Partner";
import Courses from "./Courses";
import Achivement from "./Achivement";
import View from "./View";
import Categories from "./Categories";
const Homepage = () => {
  return (
    <div className="text-black pt-[72px] bg-[#33CCFF]">
      <div className="relative">
        <img
          src={banner}
          alt="banner"
          className="mx-auto w-[1340px] h-[600px]"
        />
        {/* <div className="absolute left-[10px] top-[30px] lg:top-[50px] lg:left-[150px] bg-white w-[300px] lg:w-[450px] p-[24px] bg_banner">
          <h1 className="text-[20px] lg:text-[32px] font-bold mb-0 lg:mb-[12px]">
            Chào mừng các bạn Student đến với Prime Edu
          </h1>
          <p className=" text-[16px] hidden lg:block">
            Tất cả Course này đều dành cho các bạn, giúp các bạn nâng cao kiến
            thức cùng với các giảng viên đầy kinh nghiệm
          </p>
        </div> */}
      </div>
      {/* <Partner /> */}
      <Courses />
      {/* <Achivement /> */}
      {/* <View /> */}
      {/* <Categories /> */}
    </div>
  );
};

export default Homepage;
