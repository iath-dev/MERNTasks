import React from 'react';
import { Sidebar, TasksList } from '../../containers';
import { Header } from '../../components';
import { NewTasks } from '../../forms';
import { AuthContext } from '../../contexts';

const ProjectsPages = (props) => {

    const { authUser } = React.useContext(AuthContext);

    React.useEffect(() => {
        authUser();
        // eslint-disable-next-line
    }, []);

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
