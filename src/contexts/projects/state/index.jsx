import React from 'react';
import ProjectReducer from '../reducer';
import ProjectContext from '..';
import { PROJECT_FORM } from '../../../types/index';
import { PROJECT_LIST } from '../../../constants/examples';

const ProjectState = (props) => {
    const initial = {
        form: false,
        projectList: PROJECT_LIST,
    }
    const [state, dispatch] = React.useReducer(ProjectReducer, initial);

    // Serie de funciones para el CRUD

    const showForm = () => {
        dispatch({
            type: PROJECT_FORM,
        })
    }

    return (
        <ProjectContext.Provider
            value={{
                projectList: state.projectList,
                form: state.form,
                showForm,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;
