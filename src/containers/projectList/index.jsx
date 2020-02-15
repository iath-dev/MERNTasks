import React from 'react';
import { Project } from '../../components';
import ProjectContext from '../../contexts/projects';

const ProjectList = () => {

    const { projectList } = React.useContext(ProjectContext);

    if (projectList.lenght === 0) return null;

    return ( 
        <ul className="listado-proyectos">
            {projectList.map((project) => (
                <Project name={project.name} key={project.id} />
            ))}
        </ul>
     );
}
 
export default ProjectList;
