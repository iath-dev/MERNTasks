import React from 'react';
import { Sidebar, TasksList } from '../../containers';
import { Header } from '../../components';
import { NewTasks } from '../../forms';

const ProjectsPages = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <NewTasks />
                    <div className="contenedor-tareas">
                        <TasksList />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default ProjectsPages;
