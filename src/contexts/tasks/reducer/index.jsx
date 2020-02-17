import { PROJECT_TASKS, ADD_TASKS, VALIDATE_TASK, DELETE_TASK, TASK_STATE, SELECT_TASK, EDIT_TASK } from "../../../types";

const TasksReducer = (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(tasks => tasks.pid === action.payload),
            }
        case ADD_TASKS:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks: state.tasks.filter(tasks => tasks.id !== action.payload),
            }
        case TASK_STATE:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
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
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
            }
        default:
            return state;
    }
}

export default TasksReducer;
