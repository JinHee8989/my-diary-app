import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import DiaryDocu from './components/diary/diaryDocu';
import Logo from './utils/logo';

import Icon from 'react-native-vector-icons/FontAwesome';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();
const DiaryStack = createStackNavigator();
const NewsStack = createStackNavigator();

const headerConfig = {
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerStyle:{
        backgroundColor: '#7487C5',

    },
    headerTitleStyle:{
        flex:1,
        textAlign:'center',
    },

    headerTitle: Logo,
}


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

const TabBarIcon = (focused, name) =>{
    let iconName, iconSize; 
    if(name==='Diary'){
        iconName = 'book';
    }else if (name==='News') {
        iconName = 'newspaper-o';
    }

    if(focused){
        iconSize = 37;
    }else{
        iconSize = 32;
    }

    return <Icon name = {iconName} size = { iconSize} color='#fff'/>
}

const DiaryStackComponent = () => {
    return (
        <DiaryStack.Navigator >
            <DiaryStack.Screen name="Diary" component={Diary} options={headerConfig}/>
            <DiaryStack.Screen name="DiaryDocu" component={DiaryDocu} options={headerConfig}/>
        </DiaryStack.Navigator>
    )
}

const NewsStackComponent = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={News} options={headerConfig}/>
        </NewsStack.Navigator>
    )
}


const AppTabComponent = () => {
    return(
        <MainScreenTab.Navigator 
            tabBarOptions={{
                showLabel: false,
                activeBackgroundColor: '#788DCF',
                inactiveBackgroundColor: '#7487C5',
                style:{
                    backgroundColor: '#7487C5',
                }
            }}
            initialRouteName='Diary'
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused}) => (
                        TabBarIcon(focused,route.name)
                    )
                })
            }
        >
            <MainScreenTab.Screen name="Diary" component={DiaryStackComponent}/>
            <MainScreenTab.Screen name="News" component={NewsStackComponent}/>
        </MainScreenTab.Navigator>
    )
}

export const RootNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{headerShown:false}}
            >
                
            {isLoggedIn ? (
                <AuthStack.Screen name="Main" component={AppTabComponent}/>   
            ) : (
                <>
                    <AuthStack.Screen name="SignIn" component={SignIn}/>
                    <AuthStack.Screen name="AppTabComponent" component={AppTabComponent}/>   
                </>
            )}
        </AuthStack.Navigator>
    )
}