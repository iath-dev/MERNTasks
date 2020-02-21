import React from 'react';
import { Project } from '../../components';
import ProjectContext from '../../contexts/projects';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {

    const { projectList, getProjects } = React.useContext(ProjectContext);

    React.useEffect(() => {
        getProjects();
        //eslint-disable-next-line
    }, [])

    if (projectList.length === 0) return null;

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projectList.map((project) => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Project project={project}
                    />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ProjectList;
