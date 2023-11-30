import {
  Flex,
  Image,
  Text,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { funCreateNewFile } from "../redux/actions";

const UploadFileFromEach = ({ project_id,item }) => {
  const { icon, text } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [isFileInputInvalid, setIsFileInputInvalid] = useState(false);
  const [isDescInputInvalid, setIsDescInputInvalid] = useState(false);
  const [descErrorMessage, setDescErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    setFile("");
    setDescription("");
    setIsFileInputInvalid(false);
    setIsDescInputInvalid(false);
    setDescErrorMessage("");
  };

  const handleSubmit = () => {
    const isFileEmpty = file.length === 0;
    const isDescValue = description.length;
    if (isFileEmpty) {
      setIsFileInputInvalid(true);
      if (isDescValue === 0) {
        setIsDescInputInvalid(true);
        setDescErrorMessage("value cannot be empty");
        return;
      } else if (isDescValue < 20) {
        setIsDescInputInvalid(true);
        setDescErrorMessage("value should be min 20 char");
        return;
      }
      return;
    }
    if (isDescValue === 0) {
      setIsDescInputInvalid(true);
      setDescErrorMessage("value cannot be empty");
      return;
    } else if (isDescValue < 20) {
      setIsDescInputInvalid(true);
      setDescErrorMessage("value should be min 20 char");
      return;
    }

    const new_file = {
      file_name: file,
      file_description: description,
      project_id,
    };
    dispatch(funCreateNewFile(new_file));
    handleClose();
  };

  return (
    <>
      <Flex
        py={6}
        px={6}
        borderRadius="19px"
        border={"1px solid #999999"}
        boxShadow={"rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"}
        justifyContent={"space-evenly"}
        gap={"1.6rem"}
        cursor={"pointer"}
        transition={"all 0.5s linear"}
        _hover={{
          transform: "scale(1.04)",
        }}
        onClick={() => setIsOpen(true)}
      >
        <Image w={"4.3rem"} src={icon} alt="icon" alignSelf={"center"} />
        <Text
          fontSize={"1.2rem"}
          textAlign={"left"}
          alignSelf={"center"}
          as="b"
        >
          {text}
        </Text>
      </Flex>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {
              <Flex justifyContent={"flex-start"} gap={"0.6rem"}>
                <Image
                  w={"2.4rem"}
                  src={icon}
                  alt="icon"
                  alignSelf={"center"}
                />
                <Text
                  fontSize={"1.2rem"}
                  textAlign={"left"}
                  alignSelf={"center"}
                  as="b"
                >
                  {text}
                </Text>
              </Flex>
            }
          </ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            <FormControl isInvalid={isFileInputInvalid}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter file name"
                value={file}
                onChange={(e) => setFile(e.target.value)}
                isRequired={true}
              />
              <FormErrorMessage>value cannot be empty</FormErrorMessage>
            </FormControl>
            <FormControl mt={3} isInvalid={isDescInputInvalid}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Enter file description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isRequired={true}
                resize={"none"}
              />
              <FormErrorMessage>{descErrorMessage}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleSubmit}
              bgColor={"var(--primary-color)"}
              mr={3}
              color={"white"}
              _hover={{
                bgColor: "var(--primary-color-light)",
              }}
            >
              Save 
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadFileFromEach;
