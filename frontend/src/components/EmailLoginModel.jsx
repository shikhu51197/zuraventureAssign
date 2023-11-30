import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { funUserLogin } from "../redux/actions";

function EmailLoginMadule() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let setTimeOutId = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(setTimeOutId);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    const isEmpty = email.length === 0;
    if (isEmpty) {
      setIsInputInvalid(true);
      setErrorMessage("value cannot be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      dispatch(funUserLogin({ user_email: email }));
      handleClose();
    } else {
      setIsInputInvalid(true);
      setErrorMessage("value should be type email");
    }
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalBody pb={6}>
            <FormControl isInvalid={isInputInvalid}>
              <FormLabel>User Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email to Login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
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
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EmailLoginMadule;
