/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
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
  CheckBox,
  Input,
} from 'react-native-elements'

import { connect } from 'react-redux';
import { loginUser } from '../../appStore/actions/userActions';
import { useNavigation } from '@react-navigation/native';
import { insertObject, insertValue, getObject, getValue } from '../helper/storage'

const SignInPage = (props) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [autoLogin, setAutoLogin] = useState(true)
  const navigation = useNavigation()
  const callback = () => {
    const { loggedUser } = props.loggedUser
    if (loggedUser.id !== null) {
      insertValue("autoLogin", autoLogin.toString())
      insertObject(
        "loggedUser",
        {
          name: name,
          password: password,
        })
      navigation.navigate('AdvertTabs')
    }
    else {
      Alert.alert("Name or password doesn't match")
    }
  }

  useEffect(() => {
    try {
      getValue('autoLogin').then((value) => {
        if (value === 'true') {
          getObject("loggedUser").then((user) => {
            if (user.name !== null && user.name !== "") {
              setName(user.name)
              setPassword(user.password)
              props.loginUser(user.name, user.password, callback)
            }
          })
        }
      })
    } catch (error) {
      Alert.alert(error)
    }
  }, [])

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Input
        placeholder="Name"
        label="Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        placeholder="Password"
        label="Password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <CheckBox
        title="Do you want to remain signed in?"
        checked={autoLogin}
        onPress={() => setAutoLogin(!autoLogin)}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignUpPage')} />
        <Button title="Sign in" onPress={() => props.loginUser(name, password, callback)} />
      </View>
    </SafeAreaView>
  );
}

const mapToStateProps = (state) => {
  return {
    loggedUser: state.loggedUser
  }
}
export default connect(mapToStateProps, { loginUser })(SignInPage);