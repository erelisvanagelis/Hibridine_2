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

const TitleTextField = ({ title, value, setValue }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{title + ": "}</Text>
      <TextInput
        value={value}
        placeholder={"Enter your " + title}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={false}
      />
    </View>
  )
}

const SignUpPage = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <TitleTextField title={"Name"} value={name} setValue={setName}/>
      <TitleTextField title={"Surname"} value={surname} setValue={setSurame}/>
      <TitleTextField title={"Password"} value={password} setValue={setPassword}/>
      <TitleTextField title={"Phone number"} value={phone} setValue={setPhone}/>
      <Button title="Register"/>
    </SafeAreaView>
  )
}
export default SignUpPage