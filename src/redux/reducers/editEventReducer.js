import {EDIT_EVENT,ERROR_EDITING} from '../actions/types';
const initialState ={
    editSuccess: 'False',
    errorEdit :'False',
}

export default (state = initialState,action) =>{
    switch(action.type){
        case EDIT_EVENT:
            return {...state, editSuccess:action.payload}
        case ERROR_EDITING:
            return {...state, errorEdit:action.payload}
        default:
            return state;
    }
}