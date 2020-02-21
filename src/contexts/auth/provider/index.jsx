import React from 'react';
import AuthContext from '..';
import AuthReducer from '../reducer';
import { REGISTER_ERROR, REGISTER_SUCCESS, LOGIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGOUT } from '../../../types';
import AxiosClient from '../../../config/axios';
import tokenAuth from '../../../config/token';

const AuthProvider = (props) => {

    const initial = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        msg: null,
        load: true,
    }

    const [state, dispatch] = React.useReducer(AuthReducer, initial);

    const registerUser = async data => {
        try {
            const response = await AxiosClient.post('/api/users', data);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })

            authUser();
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

    const authUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        try {
            const response = await AxiosClient.get('/api/auth')
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const login = async (data) => {
        try {
            const response = await AxiosClient.post('/api/auth', data);
            console.log(response);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            })
            authUser();
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

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                load: state.load,
                registerUser,
                login,
                authUser,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
