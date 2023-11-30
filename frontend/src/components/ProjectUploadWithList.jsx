import { Box, Button, Flex, Grid, Heading, Text, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UploadFileFromEach from "./UploadFileFromEach";
import youtube_icon from "../assets/youtube_icon.png";
import spotify_icon from "../assets/spotify_icon.png";
import rssfeed_icon from "../assets/rssfeed_icon.png";
import EachFileTableRow from "./EachFileTableRow";

const upload_from_divs = [
  { icon: youtube_icon, text: "Upload Youtube Video" },
  { icon: spotify_icon, text: "Upload Spotify Podcast" },
  { icon: rssfeed_icon, text: "Upload from RSS Feed" },
];


const ProjectUploadWithList = ({ project_id, project_files }) => {
  const { all_projects } = useSelector((store) => store);
  const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    let findOne = all_projects.find((item) => item._id === project_id);
    setCurrentProject(findOne);
  }, []);

  return (
    <Box>
      <Heading
        textTransform={"capitalize"}
        color={"var(--primary-color)"}
        mb={7}
        textAlign={"left"}
      >
        {currentProject?.project_name}
      </Heading>
      <Grid
        gridTemplateColumns={"repeat(3,1fr)"}
        columnGap={"4.6rem"}
        rowGap={"2rem"}
      >
        {upload_from_divs?.map((item, i) => {
          return (
            <UploadFileFromEach key={i} project_id={project_id} item={item} />
          );
        })}
      </Grid>
      <Flex
        justifyContent={"space-between"}
        bgColor={"var(--primary-color)"}
        py={5}
        px={7}
        borderRadius={"12px"}
        my={"1.6rem"}
      >
        <Text alignSelf={"center"} color={"white"} fontSize={"1.3rem"}>
          All files are processed! Your widget is ready to go!
        </Text>
        <Button color={"var(--primary-color)"}>Try it out!</Button>
      </Flex>
      <TableContainer 
       boxShadow = "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
       borderRadius={"12px"}

      >
        <Table variant="simple">
          <Thead>
            <Tr >
              <Th>Name</Th>
              <Th>Upload Time & Date</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
             {project_files.length>0 && project_files?.map(file=>{
                return (
                    <EachFileTableRow key={file._id} file={file} />
                )
             })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectUploadWithList;
