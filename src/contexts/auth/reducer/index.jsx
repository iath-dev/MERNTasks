import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_ERROR, GET_USER, LOGIN_SUCCESS, LOGOUT } from "../../../types";

const AuthReducer = (state, action) => {
    switch(action.type) {
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                auth: false,
                msg: null,
                user: null,
                load: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                msg: null,
                load: false,
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                load: false,
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                msg: action.payload,
                load: false,
            }
        default:
            return state;
    }
}

export default AuthReducer;
