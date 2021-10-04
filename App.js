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

import MainPage from './src/MainPage';
import CategoryPage from './src/CategoryPage';
import RecipeePage from './src/RecipeePage';
import CommentsPage from './src/CommentsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    < NavigationContainer >
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="MainPage" component={MainPage} options={{ title: "Categories" }} />
        <Stack.Screen name="CategoryPage" component={CategoryPage} />
        <Stack.Screen name="RecipeePage" component={RecipeePage} />
        <Stack.Screen name="CommentsPage" component={CommentsPage} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
export default App
