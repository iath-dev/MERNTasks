import React from 'react';
import { TasksContext, ProjectContext } from '../../contexts';
import uuid from 'uuid';

const NewTasks = () => {

    const { project } = React.useContext(ProjectContext);
    const {
        addTask,
        getTasks,
        taskError,
        validateTask,
        selectedTask,
        editTask
    } = React.useContext(TasksContext);
    const [task, setTask] = React.useState({
        name: '',
    })
    const [edition, setEdition] = React.useState(false);

    React.useEffect(() => {
        if (selectedTask) {
            setTask(selectedTask);
            setEdition(true);
            return;
        }
        setEdition(false);
        return;
    }, [selectedTask])

    if (!project) return null;

    const [actual] = project;
    const { name } = task;

    const handleChanges = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name.trim() === '') {
            validateTask();
            return;
        }
        if (edition) {
            editTask(task);
        } else {
            task.pid = actual.id;
            task.id = uuid.v4();
            task.state = false;
            addTask(task);
        }
        getTasks(actual.id);
        setTask({ name: '', state: false });
    }

    return ( 
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                        value={name}
                        onChange={handleChanges}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={edition ? 'Editar Tarea' : 'Añadir Tarea'}
                    />
                </div>
            </form>
            {taskError && <p className="mensaje error">El nombre es obligatorio</p>}
        </div>
     );
}
 
export default NewTasks;
