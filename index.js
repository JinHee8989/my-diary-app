/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'; 
import promiseMiddleware from 'redux-promises';
import reducers from './app/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ //redux개발자 도구와 미들웨어를 같이 쓰기 위해 작성 
                        || compose; //일반 도구에서도 쓰기 위해 작성 

const createStoreWithMiddleware = createStore(reducers,composeEnhancers(
    applyMiddleware(promiseMiddleware)
))

const appRedux = () =>
<Provider store={createStoreWithMiddleware}> 
    <App/>
</Provider>

AppRegistry.registerComponent(appName, () => appRedux);
