import React from 'react';
import { ProjectContext } from '../../contexts';

const NewProject = () => {

    const { form, errorForm, showForm, addProject, showError } = React.useContext(ProjectContext);

    const [project, setProject] = React.useState({
        title: ''
    });

    const { title } = project;

    const handleChange = (event) => {
        setProject({ ...project, title: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validación
        if (title.trim() === '') {
            showError();
            return;
        }

        addProject(project);
        setProject({ title: '' });
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
                        value={title}
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>
            )}
            {errorForm && <p className="mensaje error">El nombre es obligatorio</p>}
        </React.Fragment>
     );
}
 
export default NewProject;
