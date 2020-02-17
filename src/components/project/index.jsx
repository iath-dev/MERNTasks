import React from 'react';
import ProjectContext from '../../contexts/projects';
import TasksContext from '../../contexts/tasks';

const Project = ({ project }) => {

    const { selectProject } = React.useContext(ProjectContext);
    const { getTasks } = React.useContext(TasksContext);

    const SelectProjet = (id) => {
        selectProject(id);
        getTasks(id);
    };

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => SelectProjet(project.id)}
            >
                {project.name}
            </button>
        </li>
     );
}
 
export default Project;
