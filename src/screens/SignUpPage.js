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
} from 'react-native';

import {
  Button,
  Input,
} from 'react-native-elements'

import { useDispatch } from 'react-redux';
import { addUser } from '../../appStore/actions/userActions';

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch()
  const addNewUser = (name, surname, password, phone) => {
    dispatch(addUser(name, surname, password, phone, () => {
      setName("")
      setSurname("")
      setPassword("")
      setPhone("")
      navigation.goBack()
    }))
  }
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Input
        label="Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        label="Surname"
        value={surname}
        onChangeText={value => setSurname(value)}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <Input
        label="Phone"
        value={phone}
        onChangeText={value => setPhone(value)}
      />
      <Button title="Register" onPress={() => {
        addNewUser(name, surname, password, phone)
      }} />
    </SafeAreaView>
  )
}

export default SignUpPage;