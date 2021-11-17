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

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from './appStore/reducers/index';
import ReduxThunk from 'redux-thunk';

import AdvertPage from './src/screens/AdvertPage';
import CreateAdvertPage from './src/screens/CreateAdvertPage';
import SignInPage from './src/screens/SignInPage';
import SignUpPage from './src/screens/SignUpPage';
import ViewAdvertsPage from './src/screens/ViewAdvertsPage';

const Stack = createNativeStackNavigator();
const store = createStore(combineReducers, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      < NavigationContainer >
        <Stack.Navigator initialRouteName="SignInPage" screenOptions={{ headerTitleAlign: 'center' }}>
          <Stack.Screen name="SignInPage" component={SignInPage}/>          
          <Stack.Screen name="SignUpPage" component={SignUpPage}/>        
          <Stack.Screen name="AdvertPage" component={AdvertPage}/>
          <Stack.Screen name="CreateAdvertPage" component={CreateAdvertPage}/>
          <Stack.Screen name="ViewAdversPage" component={ViewAdvertsPage}/>
          {/* <Stack.Screen name="MainPage" component={MainPage} options={{ title: "Categories" }} /> */}
        </Stack.Navigator>
      </NavigationContainer >      
    </Provider>
  );
}
export default App
