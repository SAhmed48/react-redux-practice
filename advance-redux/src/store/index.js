import configureAppStore from './config';
import * as apiActions from './api';

const store = configureAppStore();

// Subscription of store change to update UI.
const unsubscribe = store.subscribe(() => {});

// api call using api middleware
store.dispatch(apiActions.apiCallStart({
    url: '/post/list',
    onStart: 'bugRequested',
    onError: 'bugRequestedFailed',
    onSuccess: 'bugAdded'
}));

// avoid memory leak
unsubscribe();