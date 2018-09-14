import {EDIT_CLUB, ERROR_EVENTS} from '../actions/types';
const initialState ={
    editClubSuccess: 'False',
    errorEvents:'False',
}

export default (state = initialState,action) =>{
    switch(action.type){
        case EDIT_CLUB:
            return {...state, editClubSuccess:action.payload}
        case ERROR_EVENTS:
            return {...state, errorEvents:action.payload}
        default:
            return state;
    }
}