/**
 * Created by n0m4dz on 1/26/16.
 */
import createReducer from '../lib/createReducer'
import Immutable from 'immutable'
import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    'users': [],
    'profile': {
        'type': null,
        'email': null,
        'name': null,
        'password': null,
        'aimag_id': null,
        'sum_id': null,
        'bag_id': null
    },
    'aimag':[],
    'sum':[],
    'bag':[]
};

export default createReducer(initialState, {
    [ActionTypes.GET_USERS](state, {data}){
        state = state.set('users', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.GET_PROFILE](state, {data}){
        console.log(data);
        state = state.set('profile', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.CREATE_USER](state, {data}){
        var profile = state.get('profile');
        var profileObj = profile.toJS();
        profileObj[data.key] = data.value;
        state = state.set('profile', Immutable.fromJS(profileObj));
        return state;
    },


    //Locations
    [ActionTypes.GET_AIMAG](state, {data}){
        console.log(data);
        state = state.set('aimag', Immutable.fromJS(data));
        return state;
    },


    [ActionTypes.GET_SUM](state, {data}){
        console.log(data);
        state = state.set('sum', Immutable.fromJS(data));
        return state;
    },

    [ActionTypes.GET_BAG](state, {data}){
        console.log(data);
        state = state.set('bag', Immutable.fromJS(data));
        return state;
    }


});