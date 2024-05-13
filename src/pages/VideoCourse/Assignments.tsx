import React, { useEffect, useState } from "react";
import AssignmentList from "./AssignmentList";
import { useLocation } from "react-router-dom";
const Assignments = ({ courseDetail }: any) => {
  const search = useLocation().search;
  const paramsLecture = new URLSearchParams(search).get("idLecture");
  const [type, setType] = useState<any>();
  useEffect(() => {
    if (paramsLecture) {
      const newArrayType = courseDetail?.sections?.map((section: any) => {
        return section?.lectures?.filter(
          (lecture: any) => lecture?._id.toString() === paramsLecture
        );
      });
      setType(newArrayType && newArrayType[0]);
      console.log("courseDetail :>> ", courseDetail);
    }
  }, [courseDetail, paramsLecture]);
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="font-semibold text-xl">
        Bài tập về {courseDetail?.courseName}
      </h1>
      <div className="flex flex-col gap-y-2">
        {type?.map((item: any, index: any) => (
          <AssignmentList item={item} key={index} />
        ))}
        {/* <AssignmentList /> */}
        {/* <AssignmentList /> */}
        {/* <AssignmentList /> */}
        {/* <AssignmentList /> */}
      </div>
    </div>
  );
};

export default Assignments;
