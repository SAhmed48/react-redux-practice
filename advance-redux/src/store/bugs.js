import { createAction, createReducer } from '@reduxjs/toolkit';

// Section A (Actions)
export const bugAdded = createAction('bugAdded');
export const bugResolved = createAction('bugResolved');
export const bugRemoved = createAction('bugRemoved');

// Section B (Reducers)

const bugsReducer = createReducer([], {
    [bugAdded.type]: (state, action) => {
        state.push(action.payload);
    },
    [bugResolved.type]: (state, action) => {
        const index = state.indexOf(bug => {
            return bug.id === action.payload.id 
        });
        // state[index].resolved = true;
    },
    [bugRemoved.type]: (state, action) => {
        console.log(action.payload);
        state.filter(st => st.id !== action.payload.id);
    },
});

export default bugsReducer;