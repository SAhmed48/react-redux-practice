import axios from 'axios';
import * as apiActions from '../api';

export const api = ({ dispatch }) => next => async action => {
    if(action.type !== apiActions.apiCallStart.type) return next(action);

    const {url, onStart, onSuccess, onError} = action.payload;
    // loader 
    if(onStart) dispatch({ type: 'bugRequested' });

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:9000',
            url: url
        });
        // General Success
        dispatch(apiActions.apiCallSuccess(response.data));
        // Specific case
        if(onSuccess) dispatch({type: onSuccess, payload: response.data });
    } catch (error) {
        // general Error 
        dispatch(apiActions.apiCallError(error.message));
        // Specific error case
        if(onError) dispatch({type: onError, payload: error.message });
    }

};