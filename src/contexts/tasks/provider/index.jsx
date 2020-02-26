import React from 'react';
import TasksContext from '..';
import TasksReducer from '../reducer';
// import { TASKS_LIST } from '../../../constants/examples';
import { PROJECT_TASKS, ADD_TASKS, VALIDATE_TASK, DELETE_TASK, SELECT_TASK, EDIT_TASK } from '../../../types';
import AxiosClient from '../../../config/axios';

const TasksProvider = (props) => {

    const initial = {
        // tasks: [],
        taskError: false,
        projectTasks: [],
        selectedTask: null,
    }

    const [state, dispatch] = React.useReducer(TasksReducer, initial);

    /**
     * Función que trae las tareas del proyecto
     * @param {string} pid Identificador del proyecto
     */
    const getTasks = async (pid) => {
        try {
            const response = await AxiosClient.get('/api/tasks', { params: { pid } })
            dispatch({
                type: PROJECT_TASKS,
                payload: response.data.tasks,
            });
        } catch (error) {
            console.log(error.response);
        }
    }

    const addTask = async (task) => {
        try {
            const response = await AxiosClient.post('/api/tasks', task);
            dispatch({
                type: ADD_TASKS,
                payload: response.data.task,
            })
        } catch (error) {
            console.log(error)
        }
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK,
        })
    }

    const deleteTask = async (id, pid) => {
        try {
            await AxiosClient.delete(`/api/tasks/${id}`, { params: { pid } });
            dispatch({
                type: DELETE_TASK,
                payload: id,
            })
        } catch (error) {
            console.log(error.response);
        }
    }

    const selectTask = (task) => {
        dispatch({
            type: SELECT_TASK,
            payload: task,
        })
    }

    const editTask = async (task) => {
        try {
            const response = await AxiosClient.put(`/api/tasks/${task._id}`, task);
            console.log(response);
            dispatch({
                type: EDIT_TASK,
                payload: task,
            })
        } catch (error) {
            console.log(error);
        }
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
                selectTask,
                editTask,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;
