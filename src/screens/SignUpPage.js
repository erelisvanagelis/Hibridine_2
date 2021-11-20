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

import { connect } from 'react-redux';
import { addUser } from '../../appStore/actions/userActions';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation()
  const handleSubmit = () => {
    props.addUser(name, surname, password, phone, () => {
      setName("")
      setSurname("")
      setPassword("")
      setPhone("")
      navigation.goBack()
    });
  }

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Input
        placeholder="Name"
        label="Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        placeholder="Surname"
        label="Surname"
        value={surname}
        onChangeText={value => setSurname(value)}
      />
      <Input
        placeholder="Password"
        label="Password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <Input
        placeholder="Phone"
        label="Phone"
        value={phone}
        onChangeText={value => setPhone(value)}
      />
      <Button title="Register" onPress={handleSubmit} />
    </SafeAreaView>
  )
}

const mapToStateProps = (state) => {
  return {
    // users: state.users
  }
}
export default connect(mapToStateProps, { addUser })(SignUpPage);