import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

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

// Query Selector to store

export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);

export const getBugById = (state, bugID) => state.entities.bugs.filter(bug => bug.id=== bugID);

// Memoziation
// unresolved Bugs => get unresolved bugs from cache instead of computation everytime.

export const memUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
);

export default bugsReducer;