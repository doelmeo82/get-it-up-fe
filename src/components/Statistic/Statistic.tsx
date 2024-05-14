import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/appHooks";
import { getStatisticAction } from "../../store/actions/user.action";

const Statistic = () => {
  const dispatch = useAppDispatch();
  const [statistic, setStatistic] = useState<any>({});
  const getStatistic = async () => {
    try {
      const res: any = await dispatch(getStatisticAction({}));
      if (res.meta.requestStatus === "fulfilled") {
        setStatistic(res.payload.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStatistic();
  }, []);
  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>Thống kê lượt đăng nhập của User</TableCaption>
        <Thead>
          <Tr>
            <Th>Theo tháng</Th>
            <Th>Theo ngày</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{statistic.totalToday}</Td>
            <Td>{statistic.totalMonth}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Statistic;
