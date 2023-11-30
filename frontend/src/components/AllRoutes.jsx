import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AllProjects from "../pages/AllProjects";
import ProjectUploadFile from "../pages/ProjectUploadFile";
import ChatBotConfig from "../pages/ChatBotConfig";
import EditTranscriptPage from "../pages/EditTranscriptPage";
import UserSettings from "../pages/UserSettings";

const AllRoutes = () => {
   return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/projectfileupload/:project_id" element={<ProjectUploadFile />} />
        <Route path="/chatbot/:project_id" element={<ChatBotConfig />} />
        <Route path="/editTranscript/:file_id/:project_id" element={<EditTranscriptPage />} />
        <Route path="/settings/:project_id" element={<UserSettings />} />
     </Routes>
   )
};

export default AllRoutes;