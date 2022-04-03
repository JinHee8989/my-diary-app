import {
    SIGN_IN,
    SIGN_UP,
    AUTO_SIGN_IN
} from '../types';
import axios from 'axios'; //axios란 브라우저나 서버를 위한 http 클라이언트로 promise 형태임, 브라우저나 서버한테 request하기 위한 수단.
import {
    SIGNIN,
    SIGNUP,
    REFRESH
} from '../../utils/misc';


export const autoSignIn = () => {
    const request = axios({
        method:'POST',
        url: REFRESH,
        data: "grant_type=refresh_token&refresh_token="+refToken,
        header: {
            "Content-Type" : "application/x-www-form-urlencoded"
        }

    }).then(response=>{
        return response.data;
    }).catch(err=>{
        alert("에러발생");
        return false;
    })

    return {
        type: AUTO_SIGN_IN,
        payload: request
    }
}



export function signIn(data){

    const request = axios({
        method:'POST',
        url: SIGNIN,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true,
        },
        header: {
            "Content-Type" : "application/json"
        }

    }).then(response=>{
        console.log(response.data);
        return response.data;
    }).catch(err=>{
        alert("에러발생");
        return false;
    })

    return {
        type: SIGN_IN,
        payload: request
    }
}

export function signUp(data){

    const request = axios({
        method:'POST',
        url: SIGNUP,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true,
        },
        header: {
            "Content-Type" : "application/json"
        }

    }).then(response=>{
        console.log(response.data);
        return response.data;
    }).catch(err=>{
        alert("에러발생");
        return false;
    })

    return {
        type: SIGN_UP,
        payload: request
    }
}


