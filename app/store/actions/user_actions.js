import {
    SIGN_IN,
    SIGN_UP
} from '../types';
import axios from 'axios'; //axios란 브라우저나 서버를 위한 http 클라이언트로 promise 형태임, 브라우저나 서버한테 request하기 위한 수단.
import {
    SIGNUP
} from '../../utils/misc';

export function signIn(data){
    return {
        type: SIGN_IN,
        payload: {
            email: data.email,
            token: data.password
        }
    }
}

export function signUp(data){
    return {
        type: SIGN_UP,
        payload: {
            email: data.email,
            token: data.password
        }
    }
}