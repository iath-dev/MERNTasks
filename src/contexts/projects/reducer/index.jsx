import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from "../../../types";

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
            }
        default:
            return state;
    }
};

export default ProjectReducer;
