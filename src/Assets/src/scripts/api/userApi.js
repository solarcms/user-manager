/**
 * Created by n0m4dz on 1/26/16.
 */
/**
 * Created by n0m4dz on 1/10/16.
 */
import {getRequest, postResuest} from './ajaxService';

export function getUsers(){
    return getRequest('users');
}
