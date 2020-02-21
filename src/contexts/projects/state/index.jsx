import React from 'react';
import ProjectReducer from '../reducer';
import ProjectContext from '..';
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, SET_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from '../../../types/index';
import AxiosClient from '../../../config/axios';

const ProjectState = (props) => {
    const initial = {
        form: false,
        errorForm: false,
        projectList: [],
        project: null,
        msg: null,
    }
    const [state, dispatch] = React.useReducer(ProjectReducer, initial);

    // Serie de funciones para el CRUD

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM,
        })
    }

    const getProjects = async () => {

        try {
            const response = await AxiosClient.get('/api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects,
            })
        } catch (error) {
            console.log(error.response)
        }

    }

    const addProject = async (project) => {
        
        try {
            const response = await AxiosClient.post('/api/projects', project);
            dispatch({
                type: ADD_PROJECT,
                payload: response.data,
            })
        } catch (error) {
            console.log(error)
        }
    }

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM,
        })
    }

    const selectProject = (id) => {
        dispatch({
            type: SET_PROJECT,
            payload: id,
        })
    }

    const deleteProject = async (id) => {
        try {
            const response = await AxiosClient.delete(`/api/projects/${id}`);
            console.log(response);
            dispatch({
                type: DELETE_PROJECT,
                payload: id,
            })
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: error.response.data.msg,
            })
        }
    }

    return (
        <ProjectContext.Provider
            value={{
                projectList: state.projectList,
                form: state.form,
                errorForm: state.errorForm,
                project: state.project,
                msg: state.msg,
                showForm,
                getProjects,
                addProject,
                showError,
                selectProject,
                deleteProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;
