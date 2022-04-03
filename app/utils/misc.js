export const APIKEY = `AIzaSyClgpb2mPX9lAQcrXTETlq3iQGjMNcOkN0`;
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setTokens = async (values,callBack) => {
    const firstPair = ["@my_diary_app@userId", values.userId]
    const secondPair = ["@my_diary_app@token", values.token]
    const thirdPair = ["@my_diary_app@refToken", values.refToken]
    try {
      await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(response=>{callBack()}) //await은 응답이 올 때까지 기다리도록 명령(다른 작업은 못하도록 막음), 아무데서나 사용할 수 없고 개인식별과 같은 필수적인 업무에만 사용 
    } catch(e) {
      //save error
    }
  
  }

  export const getTokens = async(callBack) => {

    let values;
    try {
      values = await AsyncStorage.multiGet([
          '@my_diary_app@userId'
          , '@my_diary_app@token'
          , '@my_diary_app@refToken'
        
        ]).then(values=>{
            callBack(values);
        })
    } catch(e) {
      // read error
    }
  
    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  }
  