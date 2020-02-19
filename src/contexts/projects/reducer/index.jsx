import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, SET_PROJECT, DELETE_PROJECT } from "../../../types";

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
                projectList: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projectList: [...state.projectList, action.payload],
                form: false,
                errorForm: false,
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true,
            }
        case SET_PROJECT:
            return {
                ...state,
                project: state.projectList.filter(project => project.id === action.payload),
            }
        case DELETE_PROJECT:
            return {
                ...state,
                project: null,
                projectList: state.projectList.filter(project => project.id !== action.payload),
            }
        default:
            return state;
    }
};

export default ProjectReducer;
