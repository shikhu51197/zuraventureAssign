import { USER_LOGIN , CREATE_NEW_PROJECT, GET_ALL_PROJECTS, USER_LOGGEDIN, CREATE_NEW_FILE, GET_ALL_FILES, CHANGE_FILE_DESCRIPTION, DELETE_FILE, CHANGE_USER_DETAIL, LOADING_TRUE, ERROR, CLEAR_ERROR, CLEAR_SUCCESS, GET_CHATBOT_INFO, CREATE_CHATBOT_INFO, UPDATE_CHATBOT_INFO} from "./actionTypes";
import { change_file_description_api, change_user_detail_api, create_chatbot_info_api, create_new_file_api, create_new_project_api, delete_file_api, get_all_file_api, get_all_projects_api, get_chatbot_info_api, login_user_api, update_chatbot_info_api, user_logged_in_api } from "./api";

export const funUserLogin = (user_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let user_logged = await login_user_api(user_body);
        dispatch({type:USER_LOGIN, payload : user_logged});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in login"})
    }
}

export const funChangeUserDetail = (user_id,user_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let change_user = await change_user_detail_api(user_id,user_body);
        dispatch({type:CHANGE_USER_DETAIL,payload:change_user}); 
    } catch (error) {
        dispatch({type:ERROR,payload:"error in change user detail"})
    }
}

export const funCreateNewProject = (project_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let project_created = await create_new_project_api(project_body);
        dispatch({type : CREATE_NEW_PROJECT, payload:project_created});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in create project"})
    }
}

export const funGetAllProjects = () => async (dispatch) => {
    try {
        let all_projects = await get_all_projects_api();
        dispatch({type:GET_ALL_PROJECTS, payload:all_projects});
    } catch (error) {
        console.log("error",error);
    }
}

export const funUserLoggedIn = () => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let current = await user_logged_in_api();
        dispatch({type : USER_LOGGEDIN, payload : current})
    } catch (error) {
        dispatch({type:ERROR,payload:"error in login"})
    }
}

export const funCreateNewFile = (file_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let new_file = await create_new_file_api(file_body);
        dispatch({type: CREATE_NEW_FILE,payload:new_file});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in create file"})
    }
}

export const funGetAllFiles = (project_id) => async (dispatch) => {
    try {
        let all_files = await get_all_file_api(project_id);
        dispatch({type : GET_ALL_FILES, payload:all_files});
    } catch (error) {
        console.log("error",error);
    }
}

export const funChangeFileDescription = (file_id,project_id,file_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let file_change = await change_file_description_api(file_id,project_id,file_body);
        dispatch({type:CHANGE_FILE_DESCRIPTION, payload: file_change})
    } catch (error) {
        dispatch({type:ERROR,payload:"error in change file detail"});
    }
}

export const funDeleteFile = (file_id,project_id) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let file_delete = await delete_file_api(file_id,project_id);
        dispatch({type:DELETE_FILE, payload: file_delete});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in delete file"})
    }
}

export const funGetChatbotInfo = () => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let chatbot = await get_chatbot_info_api();
        dispatch({type:GET_CHATBOT_INFO, payload:chatbot});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in get chat"})
    }
}

export const funCreateChatbotInfo = (chatbot_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let chatbot = await create_chatbot_info_api(chatbot_body);
        dispatch({type:CREATE_CHATBOT_INFO, payload: chatbot})
    } catch (error) {
        dispatch({type:ERROR,payload:"error in create chat"})
    }
}

export const funUpdateChatbotInfo = (chatbot_id,chatbot_body) => async (dispatch) => {
    dispatch({type:LOADING_TRUE});
    try {
        let chatbot = await update_chatbot_info_api(chatbot_id,chatbot_body);
        dispatch({type:UPDATE_CHATBOT_INFO, payload : chatbot});
    } catch (error) {
        dispatch({type:ERROR,payload:"error in update chat"})
    }
}


export const funClearError = () => ({type:CLEAR_ERROR});

export const funClearSuccess = () => ({type:CLEAR_SUCCESS});