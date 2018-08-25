import {ADDED_EVENTS, ERROR_EVENTS} from '../actions/types';
const initialState ={
    addingEvents: 'False',
    errorEvents:'False',
}

export default (state = initialState,action) =>{
    switch(action.type){
        case ADDED_EVENTS:
            return {...state, addingEvents:action.payload}
        case ERROR_EVENTS:
            return {...state, errorEvents:action.payload}
        default:
            return state;
    }
}