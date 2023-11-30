import {
  Box
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import BreadCrumbNav from "../components/BreadCrumbNav";
import ProjectUploadDefault from "../components/ProjectUploadDefault";
import ProjectUploadWithList from "../components/ProjectUploadWithList";
import { useDispatch, useSelector } from "react-redux";
import { funGetAllFiles } from "../redux/actions";
import SideBarNav from "../components/SideBarNav";
import { useParams } from "react-router-dom";


const ProjectUploadFile = () => {
  const {project_id} = useParams();
  const {relevant_files} = useSelector(store=>store);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(funGetAllFiles(project_id));
  },[]);

  return (
    <Box>
      <SideBarNav project_id={project_id} />
    <Box p={7} ml={{ base: "full", md: 80 }}>
       <BreadCrumbNav project_id={project_id} currentPage={"Upload"} notSettingPage={true} />
       {relevant_files.length===0 ?
       <ProjectUploadDefault project_id={project_id} /> :
       <ProjectUploadWithList project_id={project_id} project_files={relevant_files} />
        }
    </Box>
    </Box>
  );
};

export default ProjectUploadFile;

