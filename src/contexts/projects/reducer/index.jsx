import {
    PROJECT_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    SET_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from "../../../types";

const ProjectReducer = (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form: true,
            }
        case GET_PROJECTS:
            return {
                ...state,
                projectList: action.payload,
                msg: null,
            }
        case ADD_PROJECT:
            return {
                ...state,
                projectList: [...state.projectList, action.payload],
                form: false,
                errorForm: false,
                msg: null,
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true,
                msg: null,
            }
        case SET_PROJECT:
            return {
                ...state,
                project: state.projectList.filter(project => project._id === action.payload),
                msg: null,
            }
        case DELETE_PROJECT:
            return {
                ...state,
                project: null,
                projectList: state.projectList.filter(project => project._id !== action.payload),
                msg: null,
            }
        case PROJECT_ERROR:
            return {
                ...state,
                msg: action.payload,
            }
        default:
            return state;
    }
};

export default ProjectReducer;
