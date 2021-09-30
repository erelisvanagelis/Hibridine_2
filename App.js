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

const DATA = require('./data.json');
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ItemCard = (props) => {
  const navigation = useNavigation();
  return (
    < Card >
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: props.item.path }} />
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>{props.item.description}</Text>
      <Card.Divider />
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Details'
        onPress={() => {
          navigation.navigate(props.item.id)
          console.log("paspaudziau")
        }}
      />
    </Card >
  )
}

const ItemView = (props) => {
  return (
    <SafeAreaView>
      <View>

      </View>
      {/* <ItemCard item = {props.item}/> */}
    </SafeAreaView>
  );
}

const Category = (props) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ItemCard item={item} />
  );
  return (
    <SafeAreaView>
      <Stack.Navigator>
        <Stack.Screen name="yeet" component={ItemView} />
        {props.category.items.map(item =>
          <Stack.Screen name={item.id} children={() => <ItemView item={item} />} />
        )}
      </Stack.Navigator>
      <Button title="yeet" onPress={() =>
        navigation.navigate("yeet")
      } />
      <FlatList
        data={props.category.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const App = () => {
  DATA.categories.map(category => {
    category.id = uuid.v4()
    category.items.map(item => {
      item.id = uuid.v4()
    })
  })

  console.log(DATA)

  return (
    < NavigationContainer >
      <Tab.Navigator>
        {DATA.categories.map(
          category =>
            <Tab.Screen name={category.title} children={() => <Category category={category} />} />
        )}
      </Tab.Navigator>
    </NavigationContainer >
  );
}
export default App
