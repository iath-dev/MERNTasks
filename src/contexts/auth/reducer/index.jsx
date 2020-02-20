import { REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_ERROR, GET_USER, LOGIN_SUCCESS } from "../../../types";

const AuthReducer = (state, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                msg: null,
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                msg: action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;
