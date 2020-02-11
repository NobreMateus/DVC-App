import { USER_DATA, START_DATA, RESET_DATA} from './actionTypes';

export const setData = data => {
    return {
        type: USER_DATA,
        payload: data
    }
}

export const setStartData = data => {
    return {
        type: START_DATA,
        payload: data
    }
}

export const resetData = () =>{
    return {
        type: RESET_DATA
    }
}