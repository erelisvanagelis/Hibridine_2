/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './appStore/reducers/index';
import ReduxThunk from 'redux-thunk';

import SignInPage from './src/screens/SignInPage';
import SignUpPage from './src/screens/SignUpPage';
import AllAdvertsPage from './src/screens/AllAdvertsPage';
import AdvertPage from './src/screens/AdvertPage';
import MyAdvertsPage from './src/screens/MyAdvertsPage';
import ModifyAdvertPage from './src/screens/ModifyAdvertPage';
import CreateAdvertPage from './src/screens/CreateAdvertPage';

const Stack = createNativeStackNavigator();
const store = createStore(combineReducers, applyMiddleware(ReduxThunk));
const Tab = createBottomTabNavigator();

const AdvertTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllAdvertsPage" component={AllAdvertsPage} />
      <Tab.Screen name="MyAdvertsPage" component={MyAdvertsPage} />
      <Tab.Screen name="CreateAdvertPage" component={CreateAdvertPage} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      < NavigationContainer >
        <Stack.Navigator initialRouteName="SignInPage" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="SignInPage" component={SignInPage}/>          
          <Stack.Screen name="SignUpPage" component={SignUpPage}/>   
          <Stack.Screen name="AdvertTabs" component={AdvertTabs} />     
          <Stack.Screen name="AdvertPage" component={AdvertPage}/>
          <Stack.Screen name="ModifyAdvertPage" component={ModifyAdvertPage}/>
        </Stack.Navigator>
      </NavigationContainer >      
    </Provider>
  );
}
export default App
