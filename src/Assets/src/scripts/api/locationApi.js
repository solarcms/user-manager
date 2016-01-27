/**
 * Created by n0m4dz on 1/27/16.
 */
import {getRequest, postResuest} from './ajaxService';

export function getAimag(){
    return getRequest('aimag');
}

export function getSum(id){
    return getRequest('sum/' + id);
}

export function getBag(id, ids){
    return getRequest('bag/' + id + '/' + ids);
}