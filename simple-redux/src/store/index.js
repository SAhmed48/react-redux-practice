import store from './store';
import * as actions from './actions';

const unsubscribe = store.subscribe(() => {
    // Subscription of store change to update UI
    console.log('Store Changed', store.getState());
});

// add bug action
store.dispatch(actions.bugAdded({
    id: 1, 
    description: 'Import Bug', 
    resolved: false 
}));

console.log('Bug Added',store.getState());

// BUG resolved 
store.dispatch(actions.bugResolved({
    id: 1,
    description: 'Import BUG'
}));

console.log('Bug Resolved',store.getState());


// remove bug action
store.dispatch(actions.bugRemoved({
    id: 1
}));

console.log('Bug removed',store.getState());

// avoid memory leak
unsubscribe();