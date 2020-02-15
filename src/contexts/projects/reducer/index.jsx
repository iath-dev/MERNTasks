import { PROJECT_FORM } from "../../../types";

const ProjectReducer = (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form: true,
            }
        default:
            return state;
    }
};

export default ProjectReducer;
