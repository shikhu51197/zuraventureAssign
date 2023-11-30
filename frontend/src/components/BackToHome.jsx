import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Box textAlign={"left"}>
      <Link to={"/"}>
        <Button
          size={"2xs"}
          bgColor={"white"}
          color={"black"}
          border={"1px solid black"}
          borderRadius={"12px"}
          fontSize={"0.8rem"}
          px={2}
          _hover={{
            transform: "translateY(-2px)",
          }}
        >
          <AiOutlineHome style={{ marginRight: "5px" }} />
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default BackToHome;
