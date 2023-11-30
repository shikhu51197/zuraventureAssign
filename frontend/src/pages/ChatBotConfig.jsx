import React, { useEffect } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import BreadCrumbNav from "../components/BreadCrumbNav";
import SideBarNav from "../components/SideBarNav";
import { useParams } from "react-router-dom";
import GeneralTablePanel from "../components/GeneralTablePanel";
import DispalayTablePanel from "../components/DispalayTablePanel";
import { useDispatch, useSelector } from "react-redux";
import { funGetChatbotInfo } from "../redux/actions";

const ChatBotConfig = () => {
  const { project_id } = useParams();
  const {chatbotWidget} = useSelector(store=>store);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(funGetChatbotInfo());
  },[])

  return (
    <Box>
      <SideBarNav project_id={project_id} />
      <Box p={7} ml={{ base: "full", md: 80 }}>
        <BreadCrumbNav
          project_id={project_id}
          currentPage={"Widget Configuration"}
          notSettingPage={true}
        />
        <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>
          Configuration
        </Heading>
        <Tabs>
          <TabList>
            <Tab>General</Tab>
            <Tab>Display</Tab>
            <Tab>Advance</Tab>
          </TabList>

          <TabPanels>
            <GeneralTablePanel />
            <DispalayTablePanel />
            <TabPanel>
             
            <Image
            src="https://cdn.dribbble.com/users/707433/screenshots/6654057/comp_4.gif"
            alt="error"
            margin="auto"
            paddingTop="10px"
            width='70%'
            h='450px'
          />

             </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default ChatBotConfig;
