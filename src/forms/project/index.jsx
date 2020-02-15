import React from 'react';
import ProjectContext from '../../contexts/projects';

const NewProject = () => {

    const { form, showForm, addProject } = React.useContext(ProjectContext);

    const [project, setProject] = React.useState({
        name: ''
    });

    const { name } = project;

    const handleChange = (event) => {
        setProject({ ...project, name: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validación
        if (name.trim() === '') {
            return;
        }

        addProject(project);
        setProject({ name: '' });
    }

    const handleFormToggle = () => {
        showForm();
    }

    return ( 
        <React.Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={handleFormToggle}
            >
                nuevo proyecto
            </button>
            {form && (
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
            )}
        </React.Fragment>
     );
}
 
export default NewProject;
