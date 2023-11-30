import React from "react";
import {
  Button,
  HStack,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  funCreateNewProject,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function CreateProjectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    setProject("");
    setIsInputInvalid(false);
  };

  const handleSubmit = () => {
    const isEmpty = project.length === 0;
    if (isEmpty) {
      setIsInputInvalid(true);
      return;
    }
    dispatch(funCreateNewProject({ project_name: project }));
    handleClose();
    navigate("/allprojects");
  };


  return (
    <>
      <Button
        px={8}
        bg={"black"}
        color={"white"}
        fontSize={{ base: "0.7rem", sm: "1rem", lg: "1.4rem" }}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        onClick={() => setIsOpen(true)}
      >
        <HStack spacing={3}>
          <AiFillPlusCircle />
          <Text>Create New Project</Text>
        </HStack>
      </Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isInvalid={isInputInvalid}>
              <FormLabel>Project Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter project name"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                required={true}
              />
              <FormErrorMessage>value cannot be empty</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button color={"red"} onClick={handleClose} mr={3}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              bgColor={"var(--primary-color)"}
              mr={3}
              color={"white"}
              _hover={{
                bgColor: "var(--primary-color-light)",
              }}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
