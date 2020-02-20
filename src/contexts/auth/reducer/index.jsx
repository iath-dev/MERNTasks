import { REGISTER_SUCCESS, REGISTER_ERROR } from "../../../types";

const AuthReducer = (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                msg: null,
            }
        case REGISTER_ERROR:
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
