import { USER_DATA } from '../actions/actionTypes';

const initialState = {
    name: "",
    phone: "",
    university: "",
    vision: "",
    change: "",
    promise: "",
    order: "",
    cristhian: {
        c1: {
            name: '',
            done: false
        },
        c2: {
            name: '',
            done: false
        },
        c3: {
            name: '',
            done: false
        },
        c4: {
            name: '',
            done: false
        },
        c5: {
            name: '',
            done: false
        },
    },
    ncristhian: {
        c1: {
            name: '',
            done: false
        },
        c2: {
            name: '',
            done: false
        },
        c3: {
            name: '',
            done: false
        },
        c4: {
            name: '',
            done: false
        },
        c5: {
            name: '',
            done: false
        },
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
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
        default:
            return state
    }
}

export default reducer; 