import { combineReducers } from '@reduxjs/toolkit';
import bugsReducer from './bugs';
import projectsReducer from './projects';

const entitiesReducer = combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
});

export default entitiesReducer;