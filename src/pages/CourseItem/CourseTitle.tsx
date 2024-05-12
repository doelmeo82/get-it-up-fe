import React from "react";
import teacher from "../../image/Course/teacher.png";
import { AiFillStar } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import parse from "html-react-parser";
const CourseTitle = ({ courseDetail }: any) => {
  return (
    <div className="flex flex-col gap-y-5 text-[#1D2026]">
      <h1 className="text-[32px] font-semibold">{courseDetail?.courseName}</h1>
      <div className="flex items-center gap-x-3">
        <img
          src={courseDetail?.thumbnail_url}
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        <div>
          <div className="text-[14px] text-[#1D2026] font-medium">
            {courseDetail?.courseName?.split("-")[1]}
          </div>
        </div>
      </div>
      <img src={courseDetail?.thumbnail_url} alt="" className="object-cover" />
      <div>
        {/* <h1 className="text-[#1D2026] text-[24px] font-semibold">
          Mô tả Course
        </h1> */}
        {/* <div className="text-[14px] text-[#4E5566]">
          {courseDetail?.description?.toString()?.includes("<p>")
            ? parse(courseDetail?.description)
            : courseDetail?.description}
        </div> */}
      </div>
      {/* <div className="p-[40px] bg-[#E1F7E3]/40">
        <h1 className="text-[#1D2026] text-[24px] font-semibold mb-[20px]">
          Bạn sẽ được học những gì từ Course này
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px] flex-1">
              Bạn sẽ được học với những Teacher đầy ưu tú, được tuyển chọn từ
              nhiều nơi trên toàn quốc
            </span>
          </div>
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px] flex-1">
              Cùng với những bài học vô cùng bổ ích, bám sát với chương trình
              dạy trung học phổ thông.
            </span>
          </div>
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px] flex-1">
              Cùng với đó là hệ thống xem bài học, làm bài kiểm tra vô cùng bổ
              ích để cho các bạn Student kiểm tra lại kiến thức vừa học
            </span>
          </div>
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px] flex-1">
              Ngoài ra đánh giá các bạn thông qua các bài kiểm tra, kiến thức mà
              các bạn được nắm bắt
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CourseTitle;
