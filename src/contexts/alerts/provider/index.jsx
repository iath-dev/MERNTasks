import React from 'react';
import AlertsContext from '..';
import AlertsReducer from '../reducer';
import { SHOW_ALERT, HIDE_ALERT } from '../../../types';

const AlertsProvider = (props) => {

    const initial = {
        alert: null,
    }

    const [state, dispatch] = React.useReducer(AlertsReducer, initial);

    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category,
            },
        })

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT,
            })
        }, 5000);
    }

    return (
        <AlertsContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </AlertsContext.Provider>
    )
}

export default AlertsProvider;
