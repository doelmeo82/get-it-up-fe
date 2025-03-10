import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import CoursesList from "./CoursesList";
import Message from "./Message";
import Teachers from "./Teachers";
import Favorite from "./Favorite";
import Cart from "./Cart";
import Settings from "./Settings";
import { useLocation, useNavigate } from "react-router-dom";
import BlogUser from "../BlogUser/BlogUser";
const TabProfile = () => {
  const navigation = useNavigate();
  const pathnanme = useLocation();
  const onClickTabs = () => {
    navigation(`${pathnanme.pathname}`);
  };
  return (
    <div>
      <Tabs>
        <TabList
          display="flex"
          justifyContent="space-between"
          flexWrap={"wrap"}
        >
          <Tab onClick={onClickTabs}>Dashboard</Tab>
          <Tab onClick={onClickTabs}>Grades</Tab>
          <Tab onClick={onClickTabs}>Messages</Tab>
          {/* <Tab onClick={onClickTabs}>Teacher</Tab> */}
          <Tab onClick={onClickTabs}>Wish list</Tab>
          <Tab onClick={onClickTabs}>Blog</Tab>
          {/* <Tab>Giỏ hàng</Tab> */}
          <Tab onClick={onClickTabs}>Account</Tab>
        </TabList>

        <TabPanels p={0}>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <CoursesList />
          </TabPanel>
          <TabPanel>{/* <Message /> */}</TabPanel>
          {/* <TabPanel>
            <Teachers />
          </TabPanel> */}
          <TabPanel>
            <Favorite />
          </TabPanel>
          <TabPanel>
            <BlogUser />
          </TabPanel>
          <TabPanel>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabProfile;
