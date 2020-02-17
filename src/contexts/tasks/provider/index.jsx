import React from 'react';
import TasksContext from '..';
import TasksReducer from '../reducer';
import { TASKS_LIST } from '../../../constants/examples';
import { PROJECT_TASKS } from '../../../types';

const TasksProvider = (props) => {

    const initial = {
        tasks: TASKS_LIST,
        projectTasks: [],
    }

    const [state, dispatch] = React.useReducer(TasksReducer, initial);

    const getTasks = (id) => {
        dispatch({
            type: PROJECT_TASKS,
            payload: id,
        });
    }

    return (
        <TasksContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                getTasks,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;
