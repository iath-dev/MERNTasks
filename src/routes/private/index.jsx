import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts';

const PrivateRoute = ({ component: Component, ...props }) => {
    
    const { auth, authUser, load } = React.useContext(AuthContext)
    
    React.useEffect(() => {
        authUser();
    }, [])

    return ( 
        <Route
            {...props}
            render={props => !auth && !load ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            ) }
        />
    );
}
 
export default PrivateRoute;
