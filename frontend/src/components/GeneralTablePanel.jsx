import React, { useRef } from "react";
import {
  TabPanel,
  FormControl,
  Input,
  FormLabel,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { funCreateChatbotInfo, funUpdateChatbotInfo } from "../redux/actions";

const GeneralTablePanel = () => {
  const { chatbotWidget } = useSelector((store) => store);
  const generalRef = useRef([]);
  const dispatch = useDispatch();

  const ApplyChanges = () => {
    let body = {};

    for (let i = 0; i <= 2; i++) {
      console.log("fasd");
      if (generalRef[i].value) {
        let name = generalRef[i].name;
        body[name] = generalRef[i].value;
      }
    }
    console.log("body", body);
    if (Object.keys(chatbotWidget).length > 0) {
      dispatch(funUpdateChatbotInfo(chatbotWidget._id, body));
    } else {
      dispatch(funCreateChatbotInfo(body));
    }
  };

  return (
    <TabPanel>
      <form>
        <FormControl>
          <FormLabel>Chatbot Name</FormLabel>
          <Input
            type="text"
            ref={(val) => (generalRef[0] = val)}
            defaultValue={chatbotWidget.chatbotName}
            name="chatbotName"
            borderColor={"gray.800"}
          />
          <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Welcome Message</FormLabel>
          <Input
            type="text"
            defaultValue={chatbotWidget.welcomeMessage}
            ref={(val) => (generalRef[1] = val)}
            borderColor={"gray.800"}
            name="welcomeMessage"
          />
          <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Input Placeholder</FormLabel>
          <Input
            type="text"
            defaultValue={chatbotWidget.inputPlaceholder}
            ref={(val) => (generalRef[2] = val)}
            borderColor={"gray.800"}
            name="inputPlaceholder"
          />
          <Text textAlign={"left"} fontSize={"0.8rem"} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </FormControl>
      </form>
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

export default GeneralTablePanel;
