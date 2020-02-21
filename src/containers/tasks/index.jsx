/** */
import React from 'react';
import { Task } from '../../components';
import { TasksContext, ProjectContext, AlertsContext } from '../../contexts';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TasksList = () => {

    const { project, deleteProject, msg } = React.useContext(ProjectContext);
    const { projectTasks } = React.useContext(TasksContext)
    const { showAlert, alert } = React.useContext(AlertsContext);

    React.useEffect(() => {
        if (msg) {
            console.log(msg);
            showAlert(msg, 'alerta-error');
        }
    }, [msg]);

    const onDeleteProject = (id) => {
        deleteProject(id);
    }

    if (!project) return <h2>Selecciona un proyecto</h2>;

    const [actual] = project;

    return ( 
        <div>
            { alert && (
                <div className={`alerta ${alert.category}`}>
                    {alert.msg}
                </div>
            ) }
            <h2>Proyecto: {actual.title}</h2>
            <ul className="listado-tareas">
                {projectTasks.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    <TransitionGroup>
                        {projectTasks.map((task) => (
                            <CSSTransition key={task.id} timeout={200} classNames="tarea">
                                <Task task={task}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                )}
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => onDeleteProject(actual._id)}
            >
                Eliminar Proyectos &times;
            </button>
        </div>
     );
}
 
export default TasksList;
