import { Button, Flex, HStack, Td, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {  funDeleteFile } from "../redux/actions";

function giveTimeString(timeVal){
    let base = new Date(timeVal);
    let year = base.getFullYear();
    let month = base.getMonth();
    let date = base.getDate();
    let hour = base.getHours();
    let minutes = base.getMinutes();
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let str = `${date} ${months[month]} ${year} | ${hour}:${minutes}`
    return str;
}

const EachFileTableRow = ({ file }) => {
  const { _id, file_name, file_description, project_id, created_at } = file;
  const [time, setTime] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let timeStr = giveTimeString(created_at);
    setTime(timeStr)
  }, []);

 const DeleteFile = () => {
    dispatch(funDeleteFile(_id,project_id));
 }


  return (
    <Tr>
      <Td>{file_name}</Td>
      <Td> {time} </Td>
      <Td>Done</Td>
      <Td>
        <HStack>
          <Link to={`/editTranscript/${_id}/${project_id}`}><Button>Edit</Button></Link>  
          <Button onClick={DeleteFile} color={"red"}>Delete</Button>  
        </HStack>
      </Td>
    </Tr>
  );
};

export default EachFileTableRow;

{
  /* <Tr>
  <Td>inches</Td>
  <Td>millimetres (mm)</Td>
  <Td>Done</Td>
  <Td>fasd</Td>
</Tr>; */
}
// {
//     _id: "6551b7627c482e848f4e6074",
//     file_name: "first file",
//     file_description: "file description is very important",
//     project_id: "654fd2b22fca7d4019b609a2",
//     created_at: "2023-11-13T05:32:47.734Z",
//   },
