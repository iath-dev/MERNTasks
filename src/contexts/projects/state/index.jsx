import React from 'react';
import ProjectReducer from '../reducer';
import ProjectContext from '..';
import { PROJECT_FORM, GET_PROJECTS } from '../../../types/index';
import { PROJECT_LIST } from '../../../constants/examples';

const ProjectState = (props) => {
    const initial = {
        form: false,
        projectList: [],
    }
    const [state, dispatch] = React.useReducer(ProjectReducer, initial);

    // Serie de funciones para el CRUD

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM,
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: PROJECT_LIST,
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projectList: state.projectList,
                form: state.form,
                showForm,
                getProjects,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;
