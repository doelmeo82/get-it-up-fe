import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import CreateBlog from "./CreateBlog";
import { useAppDispatch } from "../../../hooks/appHooks";
import { getBlogAction } from "../../../store/actions/blog.action";

const BlogTeacher = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const dispatch = useAppDispatch();
  const [blogList, setBlogList] = useState<any>();
  const getListBlog = async () => {
    const payload = new URLSearchParams({});
    const res: any = await dispatch(getBlogAction(payload));
    if (res.meta.requestStatus === "fulfilled") {
      console.log("🚀 ~ getListBlog ~ res:", res);
      setBlogList(res?.payload?.data);
    }
  };
  useEffect(() => {
    getListBlog();
  }, []);
  return (
    <div className="p-[24px]">
      <div className="flex justify-between items-center mb-[20px]">
        <h1 className="text-[25px] font-semibold text-[#FF6636]">
          {!openCreate ? "My blog" : "Create blog"}
        </h1>
        <Button
          bg="#FF6636"
          color="#ffffff"
          fontSize="14px"
          _hover={{
            bg: "#f85b2b",
          }}
          onClick={() => setOpenCreate(!openCreate)}
        >
          {!openCreate ? "Create blog" : "My blog"}
        </Button>
      </div>
      {!openCreate && (
        <div className="flex flex-col gap-3">
          {blogList?.listData?.length === 0 ? (
            <div className="text-center font-semibold">
              <span>No blog yet</span>
            </div>
          ) : (
            <>
              {blogList?.listData?.map((item: any, index: any) => (
                <BlogCard
                  item={item}
                  key={item?._id}
                  getListBlog={getListBlog}
                />
              ))}
            </>
          )}
        </div>
      )}
      {openCreate && (
        <div>
          <CreateBlog setOpenCreate={setOpenCreate} getListBlog={getListBlog} />
        </div>
      )}
    </div>
  );
};

export default BlogTeacher;
