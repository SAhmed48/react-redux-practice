import { createAction, createReducer } from '@reduxjs/toolkit';

// Section A (Actions)
export const userLoggedIn = createAction('userLoggedIn');

// Section B (Reducers)
const authReducer = createReducer([], {
    [userLoggedIn.type]: (state, action) => {
        state.push(action.payload);
    }
});

export default authReducer;