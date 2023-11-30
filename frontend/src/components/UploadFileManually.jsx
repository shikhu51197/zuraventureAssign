import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import cloud_upload from "../assets/cloud_upload.png";

const UploadFileManually = () => {
  return (
    <Box mt={5}>
       <Text color={"gray"}>or</Text> 
       <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"} my={5} p={"2.3rem 2rem 2rem 2rem"} borderRadius={"12px"}  border={"2px dashed gray"}>
           <Image w={{base: "2rem", sm : "3rem", md: "4rem"}} src={cloud_upload} alt='cloud' />
           <Text color={"gray.800"} mt={3}>Select a file and drag and drop here (podcast Media or Transcript Text)</Text>
           <Text  color={"gray.500"}>MP4, MOV, MP3, WAV, PDF, DOCX, or TXT File</Text>
           <Button
            bgColor={"white"}
            color={"var(--primary-color)"}
            borderRadius={"50px"}
            border={"1px solid var(--primary-color)"}
            mt={4}
           >Select File</Button>
       </Flex>
    </Box>
  )
}

export default UploadFileManually;