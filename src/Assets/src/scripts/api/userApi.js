/**
 * Created by n0m4dz on 1/26/16.
 */
import {getRequest, postResuest} from './ajaxService';

export function getUsers(){
    return getRequest('users');
}

export function getProfile(id){
    return getRequest('user/' + id);
}

export function saveUser(data){
    return postResuest('user/store/', {data: data});
}
