import React, { useContext } from "react";
import img from "../../image/Homepage/R.jpeg";
import { formatMoney } from "../../utils/lib";
import { Link, useNavigate } from "react-router-dom";
const CourseList = ({ itemList }: any) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/courses/${itemList && itemList?._id}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="rounded-3xl text-[#272829] cursor-pointer shadow-[-1px_0px_14px_-5px_rgba(0,0,0,0.66)]"
    >
      <div className="w-full h-[200px] ">
        <img
          src={itemList?.thumbnail_url}
          alt="img"
          className="rounded-3xl h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-3 ">
        <div className="flex justify-between items-center mb-[5px] ">
          {/* <h1 className="text-[10px] line-clamp-1 font-medium text-[#993D20] bg-[#FFEEE8] px-[6px] py-[4px]">
            {itemList?.courseName?.split("-")[0]}
          </h1> */}
          {/* <span className="text-[#FF6636] text-[16px] font-semibold">
            {formatMoney(itemList?.price)}VND
          </span> */}
        </div>
        <p className="text-[12px] text-[#dc3545] font-medium mb-3">
          {itemList?.courseName?.split("-")[0]}
        </p>
        <p className="text-[14px] text-[#0d6efd] font-medium mb-3 h-[60px]">
          {itemList?.courseName}
        </p>
        <div className="flex items-center gap-x-2 text-[12px]">
          <span className="px-3 py-2 bg-[#009933] w-fit font-medium text-white rounded-3xl">
            Start learning
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
