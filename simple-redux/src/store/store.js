import { createStore } from 'redux';
import reducer from './bugs/reducer';

const store = createStore(reducer);

export default store;