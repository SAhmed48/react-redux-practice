import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './combineReducers';
import { loggerMiddleware } from './middleware/logger';


export default function configureAppStore(){
    // pass configuration object to configureStore.
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            loggerMiddleware('console.log')]
    });
};