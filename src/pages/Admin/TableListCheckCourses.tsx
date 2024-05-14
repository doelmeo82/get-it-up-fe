import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ModalDetailExam from "./Modal/ModalDetailExam";
import { useAppDispatch } from "../../hooks/appHooks";
import { getListBlogAction } from "../../store/actions/blog.action";
import { list } from "postcss";
import parse from "html-react-parser";

const TableListCheckCourses = () => {
  const [page, setPage] = useState(1);
  const handleChange = (page: number) => {
    setPage(page);
  };
  const dispatch = useAppDispatch();
  const [listBlog, setListBlog] = useState<any>([]);
  const getList = async () => {
    const res: any = await dispatch(getListBlogAction({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setListBlog(res.payload.data);
      console.log("res.payload.data :>> ", res.payload.data);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tiêu đề</Th>
              <Th>Nội dung xem trước</Th>
              <Th>Tác giảng</Th>
              <Th>Trạng thái</Th>
              <Th isNumeric>Hành động</Th>
            </Tr>
          </Thead>
          <Tbody>
            {listBlog?.listData?.map((item: any) => (
              <Tr key={item._id}>
                <Td>#{item._id}</Td>
                <Td>{parse(item.title)}</Td>
                <Td>{parse(item.previewContent)}</Td>
                <Td>{item.user.fullname}</Td>
                <Td>{item.status}</Td>
                <Td isNumeric>
                  <div className="flex gap-x-3 justify-end">
                    <button
                      onClick={onOpen}
                      className="bg-[#FF6636] text-white px-[16px] py-[8px] rounded-md"
                    >
                      Xem chi tiết
                    </button>
                    <button className="bg-green-500 text-white px-[16px] py-[8px] rounded-md">
                      Được phê duyệt
                    </button>
                    <button className="bg-red-500 text-white px-[16px] py-[8px] rounded-md">
                      Không được phê duyệt
                    </button>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ModalDetailExam isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default TableListCheckCourses;
