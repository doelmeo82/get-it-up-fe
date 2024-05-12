import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import { useAppDispatch } from "../../hooks/appHooks";
import { getStudentCourse } from "../../store/actions/course.action";
import { TiStarFullOutline } from "react-icons/ti";
const TabCourseItem = ({ item, itemSearch }: any) => {
  console.log(
    "🚀 ~ file: TabCourseItem.tsx:8 ~ TabCourseItem ~ itemSearch:",
    itemSearch
  );
  // const dispatch = useAppDispatch();
  // const [getSubject, setGetSubject] = useState<any>([]);
  // const getInformation = async (items: any) => {
  //   const payload = new URLSearchParams({
  //     search: items,
  //   });
  //   const res: any = await dispatch(getStudentCourse(payload));
  //   if (res.payload && res.meta.requestStatus === "fulfilled") {
  //     setGetSubject(res?.payload.data);
  //   }
  // };
  // useEffect(() => {
  //   getInformation(item);
  // }, [item]);
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-4 pt-[100px] pb-[100px]">
        {item?.listData?.map((itemList: any, index: any) => (
          <CourseList itemList={itemList} key={itemList?._id} />
        ))}
        {/* <CourseList />
        <CourseList />
        <CourseList />
        <CourseList /> */}
      </div>
    </div>
  );
};

export default TabCourseItem;
