import { createAction, createReducer } from '@reduxjs/toolkit';

// Section A (Actions)
export const projectAdded = createAction('projectAdded');
export const projectResolved = createAction('projectResolved');
export const projectRemoved = createAction('projectRemoved');

// Section B (Reducers)

const projectsReducers = createReducer([], {
    [projectAdded.type]: (state, action) => {
        state.push(action.payload);
    },
    [projectResolved.type]: (state, action) => {
        const index = state.indexOf(bug => {
            return bug.id === action.payload.id 
        });
        // state[index].resolved = true;
    },
    [projectRemoved.type]: (state, action) => {
        console.log(action.payload);
        state.filter(st => st.id !== action.payload.id);
    },
});

export default projectsReducers;