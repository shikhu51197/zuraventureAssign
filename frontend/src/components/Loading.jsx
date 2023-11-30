import React from 'react'
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
    Flex,
    Text,
    Box,
    Image
  } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box
    bg={"transparent"}
    width={"100vw"}
    height={"100vh"}
    position={"fixed"} 
    top={0}
    left={0}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    zIndex={"14"}
    >
      <Image  w={"3rem"}
        bg={"transparent"} src={"https://media.giphy.com/media/FgH5xSNjGHZsiYPWAX/giphy.gif"} alt="loading...." />
    </Box>  
  )
}

export default Loading;

{/* <Image position={"absolute"} w={"3rem"} top={"50%"} left={"50%"} transform={"translate(-50%,-50%)"} bg={"transparent"} src={"https://media.giphy.com/media/FgH5xSNjGHZsiYPWAX/giphy.gif"} alt="loading...." /> */}
