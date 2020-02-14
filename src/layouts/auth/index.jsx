/** */
import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {

    const [auth, setAuth] = React.useState({
        email: '',
        password: '',
    })

    const { email, password } = auth;

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setAuth({ ...auth, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
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
                        <input
                            type="submit"
                            value="Iniciar Sesión"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to="/register" className="enlace-cuenta">
                    ir a crear cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default AuthPage;
