import {AUTH_CHECKER,FETCHING,FETCH_SUCCESS,FETCH_FAIL,FORGOT_PASSWORD} from '../actions/types';
const initialState ={
    isAuthenticated: 'Fetching',
    isValidEmail: 'Default',
    fetching: 'False',
}

export default (state = initialState,action) =>{
    switch(action.type){
        case FETCHING:
            return {...state, fetching:action.payload}
        case FETCH_FAIL:
            return {...state, isAuthenticated:action.payload}
        case FETCH_SUCCESS:
            return {...state, isAuthenticated:action.payload}
        case AUTH_CHECKER:
            return {...state, isAuthenticated:action.payload}
        case FORGOT_PASSWORD:
            return {...state, isValidEmail:action.payload}
        default:
            return state;
    }
}