import React from 'react';

const NewProject = () => {

    const [project, setProject] = React.useState({
        name: ''
    });

    const handleChange = (event) => {
        setProject({ ...project, name: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const { name } = project;

    return ( 
        <React.Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                nuevo proyecto
            </button>
            <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nuevo Proyecto"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />
            </form>
        </React.Fragment>
     );
}
 
export default NewProject;
