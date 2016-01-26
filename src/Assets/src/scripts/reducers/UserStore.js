/**
 * Created by n0m4dz on 1/26/16.
 */
import createReducer from '../lib/createReducer'
import Immutable from 'immutable'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    'users': [],
    'profile': {}
};

export default createReducer(initialState, {
    [ActionTypes.GET_USERS](state, {data}){
        console.log(data);
        state = state.set('users', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.GET_PROFILE](state, {data}){
        console.log(data);
        state = state.set('profile', Immutable.fromJS(data));
        return state;
    }
});