import { PROJECT_FORM, GET_PROJECTS } from "../../../types";

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
        default:
            return state;
    }
};

export default ProjectReducer;
