import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo_icon from "../assets/logo_icon.png";
import logo_name from "../assets/logo_name.png";
import { useNavigate } from "react-router-dom";

const Logo = ({ padLeft }) => {
  const navigate = useNavigate();

 const navigateToHome = () => {
  navigate("/");
 }

  return (
    <Flex
      alignItems={"center"}
      paddingTop={2}
      paddingLeft={padLeft}
      position="relative"
      onClick={navigateToHome}
    >
      <Image src={logo_icon} alt="Logo Icon" width={"2rem"} marginRight={1} />
      <Image src={logo_name} alt="Logo Icon" width={"4rem"} />
    </Flex>
  );
};

export default Logo;
