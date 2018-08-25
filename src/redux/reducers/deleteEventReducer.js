import {DELETED_EVENT, ERROR_EVENTS} from '../actions/types';
const initialState ={
    deletingEvents: 'False',
    errorEvents:'False',
}

export default (state = initialState,action) =>{
    switch(action.type){
        case DELETED_EVENT:
            return {...state, deletingEvents:action.payload}
        case ERROR_EVENTS:
            return {...state, errorEvents:action.payload}
        default:
            return state;
    }
}