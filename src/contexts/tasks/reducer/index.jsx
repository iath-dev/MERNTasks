import { PROJECT_TASKS } from "../../../types";

const TasksReducer = (state, action) => {
    switch (state.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(tasks => tasks.pid === action.payload),
            }    
        default:
            return state;
    }
}

export default TasksReducer;
