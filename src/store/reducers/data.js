import { USER_DATA, START_DATA, RESET_DATA } from '../actions/actionTypes';

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
                        help: action.payload.help,
                        cristhian: action.payload.cristhian,
                        ncristhian: action.payload.ncristhian,
                        cityState: action.payload.cityState,
                        needs: action.payload.needs,
                        jesus: action.payload.jesus,
                        commission: action.payload.commission,
                        accept: action.payload.accept,
                    }
                }
        }
        case START_DATA: 
            return {
                ...state,
                ...action.payload,
            }
        
        case RESET_DATA:
            return {
                ...initialState
            }

        default:
            return state
    }
}

export default reducer; 