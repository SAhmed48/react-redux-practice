import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs';


export default function configureAppStore(){
    // pass configuration object to configureStore.
    return configureStore({
        reducer
    });
};