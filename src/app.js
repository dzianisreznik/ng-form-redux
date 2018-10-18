import angular from 'angular';
import 'angular-messages';
import ngRedux from 'ng-redux';
import { createLogger } from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(createLogger()));

angular.module('formRedux', ['ngMessages', 'ngRedux'])
    .config(($ngReduxProvider) => {
        $ngReduxProvider.provideStore(store);
    });