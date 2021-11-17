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
  View,
  TextInput,
} from 'react-native';

import {
  Button,
  Card,
  Icon,
} from 'react-native-elements'
import TitleTextField from '../commons/TitleTextField'

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
    props.addUser(name, surname, password, phone);
    setName("")
    setSurname("")
    setPassword("")
    setPhone("")
    navigation.goBack()
  }

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <TitleTextField title={"Name"} value={name} setValue={setName}/>
      <TitleTextField title={"Surname"} value={surname} setValue={setSurname}/>
      <TitleTextField title={"Password"} value={password} setValue={setPassword}/>
      <TitleTextField title={"Phone number"} value={phone} setValue={setPhone}/>
      <Button title="Register" onPress={handleSubmit}/>
    </SafeAreaView>
  )
}

const mapToStateProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapToStateProps, { addUser })(SignUpPage);