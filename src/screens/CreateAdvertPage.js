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

import { connect } from 'react-redux';
import { addAdvert } from '../../appStore/actions/advertActions';

const CreateAdvertPage = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")

  const eventHhandler = () => {
    const { loggedUser } = props.loggedUser
    props.addAdvert(title, description, price, loggedUser.id, callback)
  }

  const callback = (result) => {
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

  return (
    <SafeAreaView>
      <Input
        placeholder="Title"
        label="Title"
        value={title}
        onChangeText={value => setTitle(value)}
      />
      <Input
        placeholder="Description"
        label="Description"
        value={description}
        onChangeText={value => setDescription(value)}
      />
      <Input
        placeholder="Price"
        label="Price"
        value={price}
        onChangeText={value => setPrice(value)}
      />
      <Button
        title="Create Advert"
        onPress={eventHhandler}
      />
    </SafeAreaView>
  );
}

const mapToStateProps = (state) => {
  return {
    loggedUser: state.loggedUser
  }
}
export default connect(mapToStateProps, { addAdvert })(CreateAdvertPage);