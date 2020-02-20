import React from 'react';
import AuthContext from '..';
import AuthReducer from '../reducer';
import { REGISTER_ERROR, REGISTER_SUCCESS } from '../../../types';
import AxiosClient from '../../../config/axios';

const AuthProvider = (props) => {

    const initial = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        msg: null,
    }

    const [state, dispatch] = React.useReducer(AuthReducer, initial);

    const registerUser = async data => {
        try {
            const response = await AxiosClient.post('/api/users', data);
            console.log(response);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            
            const alert ={
                msg: error.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert,
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                registerUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
