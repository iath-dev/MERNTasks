/** */
import React from 'react';
import { Task } from '../../components';
import { TasksContext, ProjectContext } from '../../contexts';

const TasksList = () => {

    const { project, deleteProject } = React.useContext(ProjectContext);
    const { projectTasks } = React.useContext(TasksContext)

    if (!project) return <h2>Selecciona un projecto</h2>;

    const [actual] = project;

    return ( 
        <div>
            <h2>Proyecto: {actual.name}</h2>
            <ul className="listado-tareas">
                {projectTasks.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    projectTasks.map((task) => (
                        <Task task={task} key={task.id} />
                    ))
                )}
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(actual.id)}
            >
                Eliminar Proyectos &times;
            </button>
        </div>
     );
}
 
export default TasksList;
