import {
    HStack,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { NavLink } from "react-router-dom";
  import { AiOutlineHome } from "react-icons/ai";
  import { useSelector } from "react-redux";
  import england_flag from "../assets/england_flag.png";
  import { AiOutlineBell } from "react-icons/ai";
  import { BsFillCaretDownFill } from "react-icons/bs";
  
  const BreadCrumbNav = ({ project_id, currentPage, notSettingPage }) => {
    const {all_projects} = useSelector(store=>store);
    const [currentProject , setCurrentProject] = useState({});

    useEffect(()=>{
       if(notSettingPage){
           let findOne = all_projects.find(item => item._id===project_id);
           setCurrentProject(findOne);
        } 
    },[]);
  
  
    return (
        <HStack pb={7} justifyContent={"space-between"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <NavLink to="/">
                <BreadcrumbLink color={"var(--primary-color)"}> <AiOutlineHome /> </BreadcrumbLink>
              </NavLink>
            </BreadcrumbItem>
  
            {notSettingPage && <BreadcrumbItem>
              <NavLink to="/allprojects">
                <BreadcrumbLink textTransform={"capitalize"} color={"gray.500"}>{currentProject?.project_name}</BreadcrumbLink>
              </NavLink>
            </BreadcrumbItem>}
  
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color={"var(--primary-color)"}>
                {currentPage} 
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <HStack justifyContent={"center"} alignItems={"center"} >
             <BsFillCaretDownFill  size={"1rem"} /> 
             <Text as="b" fontSize={"1.2rem"}>EN</Text> 
             <Image w={"2rem"} mr={3} src={england_flag} alt="flag" />
             <AiOutlineBell size={"2rem"} />
          </HStack>
        </HStack>
    );
  };
  
  export default BreadCrumbNav;