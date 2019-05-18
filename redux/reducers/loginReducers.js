import { types } from '../types';
import { combineReducers } from 'redux'


const userProfile = (state = {}, action) => {
    switch (types) {
        case types.LOGIN_USER:
            return action.payload;
        case types.LOGOUT_USER:
            return {};
        default:
            return state;
    }
}

export default combineReducers({
    userProfile
})