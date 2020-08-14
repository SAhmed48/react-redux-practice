import * as actionTypes from './actionTypes';

export default function reducer (current_state = [], action){
    switch(action.type){
        case actionTypes.BUG_ADDED:
            return [...current_state, {...action.payload}];
        case actionTypes.BUG_RESOLVED:
            return current_state.map(bug => 
                bug.id !== action.payload.id 
                ? bug 
                : {...action.payload, resolved: true });
        case actionTypes.BUG_REMOVED:
            return current_state.filter(bug => bug.id !== action.payload.id);
        default:
            return current_state;
    }
}