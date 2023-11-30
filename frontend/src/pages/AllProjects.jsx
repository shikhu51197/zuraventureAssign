import React, { useEffect } from "react";
import StaticNavbar from "../components/StaticNavbar";
import {
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import BackToHome from "../components/BackToHome";
import { useDispatch, useSelector } from "react-redux";
import CreateProjectButton from "../components/CreateProjectButton";
import EachProject from "../components/EachProject";
import { funGetAllProjects } from "../redux/actions";
import Logo from "../components/Logo";

const AllProjects = () => {
  const { all_projects } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(funGetAllProjects());
  },[]);

  return (
    <>
      <Logo padLeft={4} /> 
      <StaticNavbar />
      <Container maxW={"6xl"}>
        <BackToHome />
        <Flex justifyContent={"space-between"} py={4}>
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            color={"var(--primary-color)"}
          >
            Projects
          </Heading>
          <CreateProjectButton />
        </Flex>
        <Grid templateColumns={{ base : "repeat(1, 1fr)", sm : "repeat(1, 1fr)", md:  "repeat(3, 1fr)"}} columnGap={{base : "1rem" , sm : "4rem", md : "6rem"}} rowGap={"3rem"} mt={4}>
           {all_projects.length>0 && all_projects?.map((project,i)=>{
             return (
               <EachProject key={i} project={project} />
             )
           })}
        </Grid>
      </Container>
    </>
  );
};

export default AllProjects;
