/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { StyleSheet,View, Text, TextInput } from 'react-native';
 import Input from '../../utils/forms/input';
 
 class AuthForm extends Component{


    state = {
        myTextInput:''
    }

   render(){
     return(
       
         <View>
             <Input
                value = {this.state.myTextInput}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder='email address'
                placeholderTextColor='#ddd'
            />
            <Input
                value = {this.state.myTextInput}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder='password'
                placeholderTextColor='#ddd'
            />
            <Input
                value = {this.state.myTextInput}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder='password check'
                placeholderTextColor='#ddd'
            />
         </View>
       
     )
   }
 }
 
 
 
 export default AuthForm;
 