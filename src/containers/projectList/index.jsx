import React from 'react';
import { Project } from '../../components';
import ProjectContext from '../../contexts/projects';

const ProjectList = () => {

    const { projectList, getProjects } = React.useContext(ProjectContext);

    React.useEffect(() => {
        getProjects();
    }, [])

    if (projectList.lenght === 0) return null;

    return ( 
        <ul className="listado-proyectos">
            {projectList.map((project) => (
                <Project project={project} key={project.id} />
            ))}
        </ul>
     );
}
 
export default ProjectList;
