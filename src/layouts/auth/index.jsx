/** */
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, AlertsContext } from '../../contexts';

const AuthPage = (props) => {

    const { login, msg, auth } = React.useContext(AuthContext);
    const { alert, showAlert } = React.useContext(AlertsContext);
    const [data, setData] = React.useState({
        email: '',
        password: '',
    })

    const { email, password } = data;

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            showAlert('Hay campos vacíos', 'alerta-error');
            return;
        }

        login({ email, password });

    }

    React.useEffect(() => {
        if (auth) {
            props.history.replace('/projects')
        }
        if (msg) {
            showAlert(msg.msg, msg.category);
        }
        // eslint-disable-next-line
    }, [msg, auth])

    return ( 
        <div className="form-usuario">
            { alert && (
                <div className={`alerta ${alert.category}`}>
                    {alert.msg}
                </div>
            ) }
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
                    CREAR CUENTA
                </Link>
            </div>
        </div>
     );
}
 
export default AuthPage;
