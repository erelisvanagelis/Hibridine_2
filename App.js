/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { ListItem, Avatar, Button, Card, Icon } from 'react-native-elements'
import uuid from 'react-native-uuid';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

import MainPage from './src/MainPage';
import CategoryPage from './src/CategoryPage';
import RecipeePage from './src/RecipeePage';
import CommentsPage from './src/CommentsPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    < NavigationContainer >
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="MainPage" component={MainPage} options={{title: "Categories"}}/>
        <Stack.Screen name="CategoryPage" component={CategoryPage}/>
        <Stack.Screen name="RecipeePage" component={RecipeePage} />
        <Stack.Screen name="CommentsPage" component={CommentsPage} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
export default App
