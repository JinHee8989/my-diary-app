/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import { StyleSheet,View, Text } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native'
 import {RootNavigator} from './roots';
 
 class App extends Component{
   render(){
     return(
       <NavigationContainer>
         <RootNavigator/>
       </NavigationContainer>
     )
   }
 }
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 