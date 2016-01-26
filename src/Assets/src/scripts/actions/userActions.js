/**
 * Created by n0m4dz on 1/10/16.
 */
import {getUsers} from '../api/userApi'
import * as ActionTypes from '../constants/ActionTypes'

export function getUsersAction(data) {
    return {
        type: ActionTypes.GET_USERS,
        data
    }
}

export function getProfile(data){
    return {
        type: ActionTypes.GET_PROFILE,
        data
    }
}
