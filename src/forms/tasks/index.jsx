import React from 'react';

const NewTasks = () => {
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
