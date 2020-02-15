import React from 'react';
import { Sidebar } from '../../containers';
import { Header } from '../../components';

const ProjectsPages = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default ProjectsPages;
