import React from 'react';
import ProjectReducer from '../reducer';
import ProjectContext from '..';
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from '../../../types/index';
import { PROJECT_LIST } from '../../../constants/examples';
import uuid from 'uuid';

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

    const addProject = (project) => {
        project.id = uuid.v4();
        dispatch({
            type: ADD_PROJECT,
            payload: project,
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projectList: state.projectList,
                form: state.form,
                showForm,
                getProjects,
                addProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;
