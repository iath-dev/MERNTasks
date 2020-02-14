import React from 'react';
import { Project } from '../../components';
import { PROJECT_LIST } from '../../constants/examples';

const ProjectList = () => {
    return ( 
        <ul className="listado-proyectos">
            {PROJECT_LIST.map((project) => (
                <Project name={project.name} />
            ))}
        </ul>
     );
}
 
export default ProjectList;
