import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const [register, setRegister] = React.useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
    })

    const { email, password, name, confirm } = register;

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setRegister({ ...register, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear una cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Contraseña</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirmar Password"
                            value={confirm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            value="Crear Usuario"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to="/" className="enlace-cuenta">
                    VOLVER AL INICIO
                </Link>
            </div>
        </div>
     );
}
 
export default RegisterPage;
