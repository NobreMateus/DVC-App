import { createStore, combineReducers } from 'redux'; 
import userReducer from './reducers/user';
import dataReducer from './reducers/data';

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer
})

const storeConfig = () => {
    return createStore(reducers);
}

export default storeConfig;