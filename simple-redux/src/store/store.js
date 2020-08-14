import { createStore, applyMiddleware } from 'redux';
import reducer from './bugs/reducer';

const store = createStore(reducer);

// with middleware 
// const store = createStore(reducer, applyMiddleware(logger));

export default store;