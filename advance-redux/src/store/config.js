import { configureStore } from '@reduxjs/toolkit';
import reducer from './combineReducers';
import { loggerMiddleware } from './middleware/logger';


export default function configureAppStore(){
    // pass configuration object to configureStore.
    return configureStore({
        reducer,
        middleware: [loggerMiddleware]
    });
};