import { USER_LOGIN, CREATE_NEW_PROJECT, GET_ALL_PROJECTS, USER_LOGGEDIN, CREATE_NEW_FILE, GET_ALL_FILES, CHANGE_FILE_DESCRIPTION, DELETE_FILE, CHANGE_USER_DETAIL, LOADING_TRUE, CLEAR_ERROR, CLEAR_SUCCESS, ERROR, CREATE_CHATBOT_INFO, GET_CHATBOT_INFO, UPDATE_CHATBOT_INFO } from "./actionTypes";

const initState = {
    isAuthenticated : false,
    current_user : {},
    all_projects : [],
    relevant_files : [],
    chatbotWidget : {},                
    error : false,
    message : "",
    loading : false,
    success : false
};

export function Reducer(state=initState,action){
   switch(action.type){
    case LOADING_TRUE : {
        return {...state, loading : true}
    }
    case CLEAR_ERROR : {
       return {...state, error : false, message : ""}
    }
    case CLEAR_SUCCESS : {
        return {...state, success : false, message : ""}
    }
    case ERROR : {
        return {...state, error : true, message : action.payload, loading:false}
    }
    case USER_LOGIN : {
        localStorage.setItem("padcast_platform_cur_user", action.payload.current_user._id);
        return {...state, isAuthenticated : true, current_user : {...action.payload.current_user}, message : action.payload.message,loading : false, success : true};
    }
    case CHANGE_USER_DETAIL :
    case USER_LOGGEDIN : 
    {
        return {...state, isAuthenticated : true, current_user : {...action.payload.current_user}, message : action.payload.message,loading : false, success : true};
    }
    case CREATE_NEW_PROJECT : {
        return {...state, all_projects : [...action.payload.projects], message : action.payload.message,loading : false, success : true};
    }
    case GET_ALL_PROJECTS : {
        return {...state, all_projects : [...action.payload.projects], message : action.payload.message}
    }
    case GET_ALL_FILES:{
        return {...state, relevant_files : [...action.payload.files], message : action.payload.message}
    }
    case CREATE_NEW_FILE :
    case CHANGE_FILE_DESCRIPTION:
    case DELETE_FILE:
     {
        return {...state, relevant_files : [...action.payload.files], message : action.payload.message,loading : false, success : true}
    }
    case CREATE_CHATBOT_INFO :
    case GET_CHATBOT_INFO :
    case UPDATE_CHATBOT_INFO : 
    {
        return {...state, chatbotWidget : {...action.payload.chatBot_info}, message : action.payload.message,loading : false, success : true}
    }        
    default : {
        return state;
    }
   }
};