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
  Alert,
} from 'react-native';

import {
  Button,
  Card,
  Icon,
} from 'react-native-elements'
import TitleTextField from '../commons/TitleTextField'

import { connect } from 'react-redux';
import { getUsers } from '../../appStore/actions/userActions';
import { useNavigation } from '@react-navigation/native';

const SignInPage = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  const handleSubmit = () => {
    const {users} = props.users
    
    if (users != null) {
      const index = users.findIndex((user) => user.name === name && user.password === password);
      if (index === -1) {
        Alert.alert("nera")
      }
      else {
        Alert.alert("yra")
      }
    }
    else {
      Alert.alert("users null")
    }

  }

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <TitleTextField title={"Name"} value={name} setValue={setName} />
      <TitleTextField title={"Password"} value={password} setValue={setPassword} />
      <View style={{ flexDirection: 'row' }}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignUpPage')} />
        <Button title="Sign in" onPress={handleSubmit} />
      </View>

    </SafeAreaView>
  );
}

const mapToStateProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(mapToStateProps, { getUsers })(SignInPage);