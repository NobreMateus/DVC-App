import { USER_DATA } from './actionTypes';

export const setData = data => {
    return {
        type: USER_DATA,
        payload: data
    }
}