import React from 'react';
import { TasksContext } from '../../contexts';

const Task = ({ task }) => {

    const { deleteTask, getTasks, changeTaskState, selectTask } = React.useContext(TasksContext);
    const { id, pid } = task;

    const handleDelete = () => {
        deleteTask(id);
        getTasks(pid);
    }

    const handleChangeTask = () => {
        const body = {
            ...task,
            state: !task.state,
        }
        changeTaskState(body);
        getTasks(pid);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state ? (
                    <button
                        type="button"
                        className="completo"
                        onClick={handleChangeTask}
                    >
                        completo
                    </button>
                ) : (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={handleChangeTask}
                    >
                        incompleto
                    </button>
                )}
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>editar</button>
                <button type="button" className="btn btn-secundario" onClick={handleDelete}>eliminar</button>
            </div>
        </li>
     );
}
 
export default Task;
