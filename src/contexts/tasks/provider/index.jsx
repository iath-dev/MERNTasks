import React from 'react';
import TasksContext from '..';
import TasksReducer from '../reducer';
import { TASKS_LIST } from '../../../constants/examples';
import { PROJECT_TASKS, ADD_TASKS, VALIDATE_TASK, DELETE_TASK, TASK_STATE, SELECT_TASK, EDIT_TASK } from '../../../types';

const TasksProvider = (props) => {

    const initial = {
        tasks: TASKS_LIST,
        taskError: false,
        projectTasks: [],
        selectedTask: null,
    }

    const [state, dispatch] = React.useReducer(TasksReducer, initial);

    /**
     * Función que trae las tareas del proyecto
     * @param {string} id Identificador del proyecto
     */
    const getTasks = (id) => {
        dispatch({
            type: PROJECT_TASKS,
            payload: id,
        });
    }

    const addTask = (task) => {
        dispatch({
            type: ADD_TASKS,
            payload: task,
        })
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK,
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: DELETE_TASK,
            payload: id,
        })
    }

    const changeTaskState = (task) => {
        dispatch({
            type: TASK_STATE,
            payload: task,
        })
    }

    const selectTask = (task) => {
        dispatch({
            type: SELECT_TASK,
            payload: task,
        })
    }

    const editTask = (task) => {
        dispatch({
            type: EDIT_TASK,
            payload: task,
        })
    }

    return (
        <TasksContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeTaskState,
                selectTask,
                editTask,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;
