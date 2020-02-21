import React from 'react';
import { AuthContext } from '../../contexts';

const Header = () => {

    const { user, logout } = React.useContext(AuthContext)

    return ( 
        <header className="app-header">
            { user && <p className="nombre-usuario">Hola <span>{user.name}</span></p>}
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={logout}
                >
                    Cerrar Sesión
                </button>
            </nav>
        </header>
     );
}
 
export default Header;
