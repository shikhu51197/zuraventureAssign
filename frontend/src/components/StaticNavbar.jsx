import React from "react";
import { Flex, HStack } from "@chakra-ui/react";
import { AiTwotoneSetting, AiOutlineBell } from "react-icons/ai";

const StaticNavbar = () => {
  return (
    <Flex 
    justifyContent={"flex-end"}
    pr={5}
    >
      <HStack spacing={2}>
        <AiTwotoneSetting size={"1.7rem"} />
        <AiOutlineBell size={"1.7rem"} />
      </HStack>
    </Flex>
  );
};

export default StaticNavbar;
