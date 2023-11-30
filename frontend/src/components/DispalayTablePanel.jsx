import React, { useRef } from "react";
import {
  Box,
  TabPanel,
  FormControl,
  Input,
  FormLabel,
  Text,
  Grid,
  GridItem,
  HStack,
  Switch,
  Select,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { funCreateChatbotInfo, funUpdateChatbotInfo } from "../redux/actions";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const DispalayTablePanel = () => {
  const { chatbotWidget } = useSelector((store) => store);
  const displayRef = useRef([]);
  const dispatch = useDispatch();

  const handleImage = async () => {
    let file = displayRef[8].files[0];
    if (file) {
      let form = new FormData();
      form.append("image", file);
      let res = await fetch(
        `https://api.imgbb.com/1/upload?key=00fd0e9325f14196304aa8c8afba62b8`,
        {
          method: `POST`,
          body: form,
        }
      );
      let data = await res.json();
      let img_url = data.data.display_url;
      return img_url;
    } else {
      return 0;
    }
  };

  const ApplyChanges = async () => {
    let img_link = await handleImage();
    let body = {};
    if (img_link) {
      body.botIcon = img_link;
    }
    for (let i = 0; i <= 7; i++) {
      if (displayRef[i].value) {
        let name = displayRef[i].name;
        body[name] = displayRef[i].value;
      }
    }

    if (Object.keys(chatbotWidget).length > 0) {
      dispatch(funUpdateChatbotInfo(chatbotWidget._id, body));
    } else {
      dispatch(funCreateChatbotInfo(body));
    }
  };

  return (
    <TabPanel>
      <Grid
        mb={"1.5rem"}
        gridTemplateColumns={"repeat(2,1fr)"}
        columnGap={"3rem"}
      >
        <GridItem>
          <FormControl mt={3}>
            <FormLabel>Primary Color</FormLabel>
            <HStack>
              <Input
                type="text"
                ref={(val) => (displayRef[0] = val)}
                defaultValue={chatbotWidget.primaryColor}
                name="primaryColor"
                borderColor={"gray.800"}
              />
              <Box
                bg={
                  Object.keys(chatbotWidget).length &&
                  chatbotWidget.primaryColor
                }
                borderRadius={"8px"}
                border={"1px solid black"}
                h={"2.5rem"}
                w={"2.5rem"}
              ></Box>
            </HStack>
            <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mt={3}>
            <FormLabel>Font Color</FormLabel>
            <HStack>
              <Input
                type="text"
                ref={(val) => (displayRef[1] = val)}
                defaultValue={chatbotWidget.fontColor}
                name="fontColor"
                borderColor={"gray.800"}
              />
              <Box
                bg={
                  Object.keys(chatbotWidget).length && chatbotWidget.fontColor
                }
                borderRadius={"8px"}
                border={"1px solid black"}
                h={"2.5rem"}
                w={"2.5rem"}
              ></Box>
            </HStack>
            <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mt={3}>
            <FormLabel>Font Size (in px)</FormLabel>
            <Input
              type="number"
              ref={(val) => (displayRef[2] = val)}
              defaultValue={chatbotWidget.fontSize}
              name="fontSize"
              borderColor={"gray.800"}
            />
            <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mt={3}>
            <FormLabel>Chat Height (in % of total screen)</FormLabel>
            <Input
              type="number"
              ref={(val) => (displayRef[3] = val)}
              defaultValue={chatbotWidget.chatHeight}
              name="chatHeight"
              borderColor={"gray.800"}
            />
            <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl mt={3}>
            <HStack justifyContent={"space-between"}>
              <div>
                <FormLabel>Show Sources</FormLabel>
                <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </div>
              <Switch id="email-alerts" isChecked={true} />
            </HStack>
          </FormControl>
        </GridItem>
      </Grid>
      <hr />
      <Text
        display={"block"}
        mt={"1.5rem"}
        textAlign={"left"}
        as={"b"}
        color={"var(--primary-color)"}
      >
        Chat Icon
      </Text>
      <Grid
        mb={"1.5rem"}
        gridTemplateColumns={"repeat(2,1fr)"}
        columnGap={"3rem"}
      >
        <FormControl mt={3}>
          <FormLabel>Chat Icon Size</FormLabel>
          <Select
            ref={(val) => (displayRef[4] = val)}
            defaultValue={chatbotWidget.chatIconSize}
            name="chatIconSize"
            borderColor={"gray.800"}
          >
            <option value="small">small</option>
            <option value="large">large</option>
            <option value="extra large">extra large</option>
          </Select>
          {/* <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text> */}
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Position on Screen</FormLabel>
          <Select
            ref={(val) => (displayRef[5] = val)}
            defaultValue={chatbotWidget.positionOnScreen}
            name="positionOnScreen"
            borderColor={"gray.800"}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </Select>
          {/* <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text> */}
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Distance from Bottom (in px)</FormLabel>
          <Input
            type="number"
            ref={(val) => (displayRef[6] = val)}
            defaultValue={chatbotWidget.distanceFromBottom}
            name="distanceFromBottom"
            borderColor={"gray.800"}
          />
          {/* <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text> */}
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Horizontal Distance (in px)</FormLabel>
          <Input
            type="number"
            ref={(val) => (displayRef[7] = val)}
            defaultValue={chatbotWidget.horizontalDistance}
            name="horizontalDistance"
            borderColor={"gray.800"}
          />
          {/* <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text> */}
        </FormControl>
        <FormControl mt={3}>
          <Text display={"block"} textAlign={"left"} as={"b"}>
            Bot Icon
          </Text>
          <HStack alignItems={"center"} mt={"5px"}>
            <Avatar
              src={
                Object.keys(chatbotWidget).length &&
                chatbotWidget.botIcon &&
                chatbotWidget.botIcon
              }
            ></Avatar>
            <Box
              display="flex"
              gap={1}
              bg={"var(--primary-color)"}
              color={"white"}
              borderRadius={"8px"}
              transition={"all 0.5s"}
             
              _hover={{
                bg: "var(--primary-color-light)",
              }}
              border={"1px solid black"}
            >
              <FormLabel p={1} ml={2} transition={"all 0.5s"} htmlFor="choose_icon">
                Upload Image
              </FormLabel>
              <Box pt={3} mr={2}>
                <FaArrowUpFromBracket />
              </Box>
            </Box>
            <Input
              id="choose_icon"
              display={"none"}
              type="file"
              ref={(val) => (displayRef[8] = val)}
              accept="image/*"
              borderColor={"gray.800"}
            />
          </HStack>
        </FormControl>
      </Grid>
      <Button
        bg={"var(--primary-color)"}
        color={"white"}
        transition={"all 0.5s"}
        _hover={{
          bg: "var(--primary-color-light)",
        }}
        onClick={ApplyChanges}
      >
        Apply
      </Button>
    </TabPanel>
  );
};

export default DispalayTablePanel;
