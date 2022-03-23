import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();


/*
    Stack Navigator
        -Stack Screen A

        ⬇︎ 

    Stack Navigator   --> avigation 구조 
        - Tab Navigator
            -Tab Screen B
            -Tab Screen C
*/ 

const isLoggedIn = false;
const AppTabComponent = () => {
    return(
        <MainScreenTab.Navigator>
            <MainScreenTab.Screen name="Diary" component={Diary}/>
            <MainScreenTab.Screen name="News" component={News}/>
        </MainScreenTab.Navigator>
    )
}

export const RootNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{headerShown:false}}>
                
            {isLoggedIn ? (
                <AuthStack.Screen name="Main" component={AppTabComponent}/>   
            ) : (
                <AuthStack.Screen name="SignIn" component={SignIn}/>
            )}
        </AuthStack.Navigator>
    )
}