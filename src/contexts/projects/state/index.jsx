import React from 'react';
import ProjectReducer from '../reducer';
import ProjectContext from '..';

const ProjectState = (props) => {
    const initial = {
        form: false,
    }
    const [state, dispatch] = React.useReducer(ProjectReducer, initial);

    // Serie de funciones para el CRUD
    return (
        <ProjectContext.Provider value={{ form: state.form }}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;
