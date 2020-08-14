import axios from 'axios';

export const api = ({ dispatch }) => next => async action => {
    if(action.type !== 'apiCallRequest') return next(action);
    next(action);
    
    const {url, onSuccess, onError} = action.payload;
    try {
        const response = await axios.request({
            baseURL: 'http://localhost:9000',
            url: url
        });
        dispatch({type: onSuccess, payload: response.data });
    } catch (error) {
        console.log(error);
        dispatch({type: onError, payload: error });
    }

};