import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import PagiantionNew from "../../components/Pagination/PagiantionNew";
import { useAppDispatch } from "../../hooks/appHooks";
import { getListExam } from "../../store/actions/exam.action";

const Assingments = () => {
  const [page, setPage] = useState(1);
  const handleChange = (page: number) => {
    setPage(page);
  };
  const dispatch = useAppDispatch();
  const [examList, setExamList] = useState<any>([]);
  const getList = async () => {
    const res: any = await dispatch(getListExam({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setExamList(res.payload.data);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <div className="py-[100px] px-[24px] text-[#272829]">
        <h1 className="text-red-400 text-3xl font-semibold">Exam list</h1>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Time</Th>
                <Th>Created date</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {examList?.listData?.map((item: any) => (
                <>
                  <Tr key={item._id}>
                    <Td>#{item._id}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.time}</Td>
                    <Td>{item.createdAt}</Td>
                    <Td>
                      <a
                        className="hover:bg-blue-400"
                        href={`http://localhost:3000/courses/16/assignment?id=${item._id}`}
                      >
                        Go to exam
                      </a>
                    </Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>
          <div className="mt-4">
            <PagiantionNew
              onPageChange={handleChange}
              totalCount={examList?.total}
              pageSize={10}
              siblingCount={1}
              currentPage={page}
            />
          </div>
        </TableContainer>
      </div>
    </>
  );
};

export default Assingments;
