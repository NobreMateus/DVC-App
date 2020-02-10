import { USER_DATA, START_DATA } from '../actions/actionTypes';

const initialState = {
   forms:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                forms:{
                    ...state['forms'],
                    [action.payload.formId]:{
                        name: action.payload.name,
                        phone: action.payload.phone,
                        university: action.payload.university,
                        vision: action.payload.vision,
                        change: action.payload.change,
                        promise: action.payload.promise,
                        order: action.payload.order,
                        cristhian: action.payload.cristhian,
                        ncristhian: action.payload.ncristhian,
                    }
                }
        }
        case START_DATA: 
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default reducer; 