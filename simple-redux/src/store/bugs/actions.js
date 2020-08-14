import * as actionTypes from './actionTypes';

export const bugAdded = payload => ({
    type: actionTypes.BUG_ADDED,
    payload: {...payload}
});

export const bugResolved = payload => ({
    type: actionTypes.BUG_RESOLVED,
    payload: {...payload}
});

export const bugRemoved = (payload) => ({
    type: actionTypes.BUG_REMOVED,
    payload: {...payload}
});

