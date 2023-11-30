import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSettings, FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import { SiChatbot} from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BsFiles } from "react-icons/bs";
import { NavLink as RouterLink } from "react-router-dom";

const LinkItems = [
  { name: "Projects", icon: BsFiles, curlink: "/projectfileupload/" },
  { name: "Widget Configration", icon: SiChatbot, curlink: "/chatbot/" },
  { name: "Deployment", icon: AiOutlineDeploymentUnit, curlink: "/settings/" },
  { name: "Pricing", icon: GrMoney, curlink: "/settings/" },
];

export default function SideBarNav({ project_id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <SidebarContent
        onClose={() => onClose}
        project_id={project_id}
        display={{ base: "none", md: "block" }}
      />
      {/* mobile nav drawer  */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} project_id={project_id} />
        </DrawerContent>
      </Drawer>
      {/* mobile nav with hemburger */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, project_id, ...rest }) => {
  return (
    <Box
      bg={"#f3e8ff"}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 80 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Logo padLeft={0} />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        h={"88vh"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Box>
          <Text
            fontSize={"1rem"}
            color="gray.500"
            py={3}
            mx={4}
            textAlign={"left"}
          >
            Product Upload Flow
          </Text>
          {LinkItems.map((link) => (
            <NavItem
              key={link.name}
              icon={link.icon}
              curlink={link.curlink}
              project_id={project_id}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
        <NavItem
          icon={FiSettings}
          curlink={"/settings/"}
          project_id={project_id}
        >
          Settings
        </NavItem>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, project_id, curlink, ...rest }) => {
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <RouterLink to={`${curlink}${project_id}`}>
        <Flex
          align="center"
          py={3}
          px="4"
          mx="4"
          borderRadius="33px"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "var(--primary-color)",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </RouterLink>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
