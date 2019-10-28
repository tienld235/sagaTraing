/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import CounterContainer from './src/containers/CounterContainer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './src/sagas'

const sagaMiddleware = createSagaMiddleWare();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
)
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
