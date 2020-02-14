import React from 'react';
import { NewProject } from '../../forms';
import { ProjectList } from '..';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NewProject />
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ProjectList />
            </div>
        </aside>
     );
}
 
export default Sidebar;
