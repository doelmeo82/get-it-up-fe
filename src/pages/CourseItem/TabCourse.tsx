import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Topic from "./Topic";
import Comment from "./Comment";
import AnotherCourse from "./AnotherCourse";
const TabCourse = ({ courseDetail, isShow }: any) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Section</Tab>
          {isShow && <Tab>Rating</Tab>}
          {isShow && <Tab>Related courses</Tab>}
        </TabList>

        <TabPanels p={0}>
          {/* <TabPanel>
            <Topic courseDetail={courseDetail} isShow={isShow}/>
          </TabPanel> */}
          {isShow && (
            <TabPanel>
              <Comment />
            </TabPanel>
          )}

          {isShow && (
            <TabPanel>
              <AnotherCourse courseDetail={courseDetail} />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabCourse;
