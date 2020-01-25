import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';

const initialState = {
    email: null, 
    uid: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGGED_IN:
            return {
                ...state,
                email: action.payload.email,
                uid: action.payload.uid
            }
        case USER_LOGGED_OUT: 
            return {
                ...state,
                email: null,
                uid: null
            }
        default:
            return state
    }
}

export default reducer; 