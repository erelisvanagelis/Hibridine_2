/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

import {
  Button,
  Card,
  Icon,
} from 'react-native-elements'

const RecipeeCard = ({ recipee, navigation }) => {
  return (
    < Card >
      <Card.Title>{recipee.title}</Card.Title>
      <Card.Divider />
      <Card.Image source={{ uri: recipee.imgUrl }} />
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>{recipee.description}</Text>
      <Card.Divider />
      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        title='Details'
        onPress={() => navigation.push('RecipeePage', { recipee: recipee })} />
    </Card >
  )
}

const CategoryPage = ({ navigation, route }) => {
  const renderItem = ({ item }) => (
    <RecipeeCard recipee={item} navigation={navigation} />
  );

  const { category } = route.params
  useEffect(() => {
    navigation.setOptions({ title: category.title })
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={category.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
export default CategoryPage