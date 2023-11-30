import React from "react";
import { Avatar, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EachProject = ({ project }) => {
  const navigate = useNavigate();

  const calculateTimeAgo = (timestamp) => {
    const currentDate = new Date();
    const lastUpdatedDate = new Date(timestamp);
    const timeDifference = currentDate - lastUpdatedDate;
    const minutes = Math.floor(timeDifference / (60 * 1000));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  const navigateToUploadFilePage = () => {
    navigate(`/projectfileupload/${project._id}`);
  };

  return (
    <Grid
      py={2}
      px={2}
      borderRadius="lg"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      border={"1px solid #999999"}
      boxShadow={"rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"}
      columnGap={{ base: 2, sm: 3, md: 4 }}
      onClick={navigateToUploadFilePage}
    >
      <GridItem alignSelf={"center"} rowSpan={3} colSpan={1}>
        <Avatar
          size={{ base: "md", sm: "lg", md: "xl" }}
          borderRadius={"20%"}
          name={project.project_name}
        />
      </GridItem>
      <GridItem colSpan={4} justifySelf={"flex-start"} alignSelf={"center"}>
        <Text
          fontSize="xl"
          mt={3}
          textTransform={"capitalize"}
          fontWeight="bold"
          color={"var(--primary-color)"}
        >
          {project.project_name}
        </Text>
      </GridItem>

      <GridItem colSpan={4} justifySelf={"flex-start"} alignSelf={"center"}>
        <Text color="gray.800">4 episode</Text>
      </GridItem>
      <GridItem colSpan={4} justifySelf={"flex-start"} alignSelf={"center"}>
        <Text color="gray.500">
          Last edited {calculateTimeAgo(project.last_edited)}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default EachProject;
