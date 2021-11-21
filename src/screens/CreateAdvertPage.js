/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  Alert,
} from 'react-native';

import {
  Button,
  Input,
} from 'react-native-elements'

import { addAdvert } from '../../appStore/actions/advertActions';
import { useDispatch, useSelector } from 'react-redux';

const CreateAdvertPage = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  const dispatch = useDispatch()
  const { loggedUser } = useSelector(state => state.loggedUser)
  const addNewAdvert = (title, description, price, userId, name, surname, phone) => dispatch(addAdvert(
    title, description, price, userId, name, surname, phone, (result) => {
      if (result === "SUCESS") {
        Alert.alert("Suceeded to add")
        setTitle("")
        setDescription("")
        setPrice("")
      }
      else {
        Alert.alert("Failed to add")
      }
    }
  ))

  return (
    <SafeAreaView>
      <Input
        label="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Input
        label="Description"
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Price"
        value={price}
        onChangeText={value => setPrice(value)}
      />
      <Button
        title="Create Advert"
        onPress={() => addNewAdvert(title, description, price, loggedUser.id, loggedUser.name, loggedUser.surname, loggedUser.phone)}
      />
    </SafeAreaView>
  );
}
export default CreateAdvertPage;