import configureAppStore from './config';
import {bugAdded, bugResolved, bugRemoved } from './bugs';

const store = configureAppStore();

const unsubscribe = store.subscribe(() => {
    // Subscription of store change to update UI
    console.log('Store Changed', store.getState());
});

// add bug action
store.dispatch(bugAdded({
    id: 1, 
    description: 'Bug 1', 
    resolved: false 
}));

store.dispatch(bugAdded({
    id: 2, 
    description: 'Bug 2', 
    resolved: false 
}));

store.dispatch(bugAdded({
    id: 3, 
    description: 'Bug 3', 
    resolved: false 
}));

console.log('Bug Added',store.getState());

// BUG resolved 
store.dispatch(bugResolved({
    id: 1
}));

console.log('Bug Resolved',store.getState());


// remove bug action
store.dispatch(bugRemoved({
    id: 1
}));

console.log('Bug removed',store.getState());

// avoid memory leak
unsubscribe();