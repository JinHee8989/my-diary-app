import {
    SIGN_IN,
    SIGN_UP,
    AUTO_SIGN_IN
} from '../types';


export default function(state={},action){ //여기서 쓰는 state는 각 클래스 내부의 state가 아닌 store 내부에서 관리되는 state임 
    switch(action.type){
        case SIGN_IN : 
            return {
                ...state,
                auth:{
                    userId : action.payload.localId || false,
                    token : action.payload.idToken || false,
                    refToken : action.payload.refreshToken || false,
                }
            }  
        case SIGN_UP : 
            return {
                ...state,
                auth:{
                    userId : action.payload.localId || false,
                    token : action.payload.idToken || false,
                    refToken : action.payload.refreshToken || false,
                }
            } 
        case AUTO_SIGN_IN : 
            return {
                ...state,
                auth:{
                    userId : action.payload.user_id || false,
                    token : action.payload.id_token || false,
                    refToken : action.payload.refresh_token || false,
                }
            } 


        default:
            return state;

    }
}