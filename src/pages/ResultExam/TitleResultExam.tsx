import React from "react";
import {
  MdOutlineAssignment,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import { TbArrowBackUpDouble } from "react-icons/tb";
import {
  IoIosCheckmarkCircleOutline,
  IoMdTime,
  IoIosTimer,
} from "react-icons/io";
import { VscError } from "react-icons/vsc";
import { FcDataBackup } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  resetPostExam,
  selectResultExam,
  updateTimeFinish,
  updateTimeStop,
} from "../../store/reducers/examSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { resetArray } from "../../store/reducers/questionSlice";
const TitleResultExam = () => {
  const questionResult: any = useSelector(selectResultExam);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleExamAgain = () => {
    dispatch(updateTimeStop(false));
    dispatch(updateTimeFinish(0));
    dispatch(resetArray({}));
    dispatch(resetPostExam({}));
    navigate(-1);
  };
  return (
    <div className="">
      <h1 className="text-center text-[#FF6636] font-semibold text-[24px] mb-[10px]">
        Congrat for finishing {questionResult?.title}
      </h1>
      <div className="px-[16px] py-[18px] border-[2px] border-[#FF6636] rounded-lg">
        <div className="flex lg:flex-row flex-col items-center gap-4 h-full">
          <div className="flex flex-col gap-1 items-center px-[16px]">
            <span className="text-[20px] uppercase font-semibold">Grade:</span>
            <h1 className="text-[18px] text-[#FF6636] font-medium">
              {questionResult?.score}/10
            </h1>
          </div>
          <div className="w-full lg:w-[0.5px] h-[0.5px] lg:h-[60px] bg-[#FF6636]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 flex-1">
            <div className="flex items-center gap-x-[10px]">
              <MdOutlineAssignmentTurnedIn className="text-[#3cb46e] text-[20px]" />
              <span className="">
                Done{" "}
                <span className="text-[#FF6636] font-semibold">
                  {questionResult?.selected}/{questionResult?.totalQuestions}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <IoIosCheckmarkCircleOutline className="text-[#3cb46e] text-[20px]" />
              <span>
                Correct:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {" "}
                  {questionResult?.corrects}/{questionResult?.totalQuestions}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <VscError className="text-[#e43a45] text-[20px]" />
              <span>
                Wrong:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {" "}
                  {questionResult?.incorrect}/{questionResult?.totalQuestions}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <IoMdTime className="text-[#FF6636] text-[20px]" />
              <span>
                Time:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {questionResult?.completeTime}/45 minutes
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <IoIosTimer className="text-[#FF6636] text-[20px]" />
              <span>
                Speed:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {questionResult?.completeTime / 4} seconds/question
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-[10px] my-3">
        <button className="flex items-center gap-x-[10px] px-[8px] py-[4px] border-[1px] rounded-md">
          <MdOutlineAssignment className="text-[20px]" />
          <span className="text-[14px]">View solution</span>
        </button>
        <button
          onClick={() => {
            navigate("/");
            dispatch(updateTimeFinish(0));
            dispatch(updateTimeStop(false));
            dispatch(resetArray({}));
            dispatch(resetPostExam({}));
          }}
          className="flex items-center gap-x-[10px] px-[8px] py-[4px] border-[1px] rounded-md"
        >
          <TbArrowBackUpDouble className="text-[20px]" />
          <span className="text-[14px]">Go to home page</span>
        </button>
        <button
          onClick={handleExamAgain}
          className="flex items-center gap-x-[10px] px-[8px] py-[4px] border-[1px] rounded-md"
        >
          <FcDataBackup className="text-[20px]" />
          <span className="text-[14px]">Re-take the exam</span>
        </button>
      </div>
    </div>
  );
};

export default TitleResultExam;
