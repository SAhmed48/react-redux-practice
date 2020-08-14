import { createAction } from '@reduxjs/toolkit';

// Section A (Actions)
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

// Section B (Reducers)
export default function reducer(current_state = [], action){
    switch(action.type) {
        case bugAdded.type:
            return [...current_state, {...action.payload}];
        case bugResolved.type:
            return current_state.map(bug => 
                bug.id !== action.payload.id 
                ? bug 
                : {...action.payload, resolved: true });
        case bugRemoved.type:
            return current_state.filter(bug => bug.id !== action.payload.id);
        default:
            return current_state;
    }
}