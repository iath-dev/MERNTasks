import React from 'react';
import ProjectContext from '../../contexts/projects';

const NewTasks = () => {

    const { project } = React.useContext(ProjectContext);

    if (!project) return null;

    const [actual] = project;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="agregar tarea"
                        name="name"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default NewTasks;
