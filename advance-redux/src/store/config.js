import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './combineReducers';
import { loggerMiddleware } from './middleware/logger';
import { api } from './middleware/api';


export default function configureAppStore(){
    // pass configuration object to configureStore.
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            loggerMiddleware('console.log'),
            api
        ]
    });
};