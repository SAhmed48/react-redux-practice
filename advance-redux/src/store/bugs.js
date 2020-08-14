// Section A (Action Types)

export const BUG_ADDED = 'BUG_ADDED';
export const BUG_RESOLVED = 'BUG_RESOLVED';
export const BUG_REMOVED = 'BUG_REMOVED';


// Section B (Actions)
export const bugAdded = payload => ({
    type: BUG_ADDED,
    payload: {...payload}
});

export const bugResolved = payload => ({
    type: BUG_RESOLVED,
    payload: {...payload}
});

export const bugRemoved = payload => ({
    type: BUG_REMOVED,
    payload: {...payload}
});

// Section C (Reducers)
export default function reducer(current_state = [], action){
    switch(action.type){
        case BUG_ADDED:
            return [...current_state, {...action.payload}];
        case BUG_RESOLVED:
            return current_state.map(bug => 
                bug.id !== action.payload.id 
                ? bug 
                : {...action.payload, resolved: true });
        case BUG_REMOVED:
            return current_state.filter(bug => bug.id !== action.payload.id);
        default:
            return current_state;
    }
}