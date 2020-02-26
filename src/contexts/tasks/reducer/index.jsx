import { PROJECT_TASKS, ADD_TASKS, VALIDATE_TASK, DELETE_TASK, SELECT_TASK, EDIT_TASK } from "../../../types";

const TasksReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: action.payload,
            }
        case ADD_TASKS:
            return {
                ...state,
                projectTasks: [action.payload, ...state.projectTasks],
                taskError: false,
            }
        case VALIDATE_TASK:
            return {
                ...state,
                taskError: true,
            }
        case DELETE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.filter(tasks => tasks._id !== action.payload),
            }
        case SELECT_TASK:
            return {
                ...state,
                selectedTask: action.payload,
            }
        case EDIT_TASK:
            return {
                ...state,
                selectedTask: null,
                projectTasks: state.projectTasks.map(task => task._id === action.payload._id ? action.payload : task),
            }
        default:
            return state;
    }
}

export default TasksReducer;
