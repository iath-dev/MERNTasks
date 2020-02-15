/** */
import React from 'react';
import { Examples } from '../../constants';
import { Task } from '../../components';

const TasksList = () => {
    return ( 
        <div>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {Examples.TASKS_LIST.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    Examples.TASKS_LIST.map((task) => (
                        <Task task={task} />
                    ))
                )}
            </ul>
        </div>
     );
}
 
export default TasksList;
