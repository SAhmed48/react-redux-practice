import { configureStore } from '@reduxjs/toolkit';
import reducer from './combineReducers';


export default function configureAppStore(){
    // pass configuration object to configureStore.
    return configureStore({
        reducer
    });
};