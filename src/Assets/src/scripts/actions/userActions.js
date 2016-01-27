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

export function createUser(data){
    return{
        type: ActionTypes.CREATE_USER,
        data
    }
}

export function getAimagAction(data) {
    return {
        type: ActionTypes.GET_AIMAG,
        data
    }
}

export function getSumAction(data) {
    return {
        type: ActionTypes.GET_SUM,
        data
    }
}

export function getBagAction(data) {
    return {
        type: ActionTypes.GET_BAG,
        data
    }
}