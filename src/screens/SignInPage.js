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
} from 'react-native-elements'
import TitleTextField from '../commons/TitleTextField'

import { connect } from 'react-redux';
import { loginUser } from '../../appStore/actions/userActions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InsertValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e)
  }
}

const InsertObject = async (key, object) => {
  try {
    const jsonValue = JSON.stringify(object);
    InsertValue(key, jsonValue)
  } catch (e) {
    console.log(e);
  }
}

export const GetValue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.log(e);
  }
}

const GetObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    const value = JSON.parse(jsonValue);
    return value
  } catch (e) {
    console.log(e);
  }
}

const SignInPage = (props) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [autoLogin, setAutoLogin] = useState(true)
  const navigation = useNavigation()
  const callback = () => {
    const { loggedUser } = props.loggedUser
    if (loggedUser.id !== null) {
      if (autoLogin) {
        InsertObject(
          "savedUser",
          {
            name: name,
            password: password
          })

          console.log("kvieciamas pridedant")
          GetObject("savedUser").then((user) => {
            if (user !== null) {
              console.log(user)
              if (user.name !== null && user.name !== "") {
                console.log("yra issaugoti duomenys")
              }
            }
          })  
      }
      else {
        InsertObject(
          "savedUser",
          {
            name: null,
            password: null,
          })
      }

      navigation.navigate('AdvertTabs')
    }
    else {
      Alert.alert("nera")
    }
  }

  useEffect(() => {
    console.log("I have been mounted")
    GetObject("savedUser").then((user) => {
      if (user !== null) {
        console.log(user)
        if (user.name !== null && user.name !== "") {
          console.log("yra issaugoti duomenys")
          props.loginUser(user.name, user.password, callback)
        }
      }
    })    
  }, [])

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <TitleTextField title={"Name"} value={name} setValue={setName} />
      <TitleTextField title={"Password"} value={password} setValue={setPassword} />
      <CheckBox
        title="Do you want to remain signed in?"
        checked={autoLogin}
        onPress={() => {
          if (autoLogin) {
            setAutoLogin(false)
          }
          else {
            setAutoLogin(true)
          }
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title="Sign up" onPress={ () => navigation.navigate('SignUpPage')} />
        <Button title="Sign in" onPress={ () => props.loginUser(name, password, callback)} />
      </View>
    </SafeAreaView>
  );
}

const mapToStateProps = (state) => {
  return {
    users: state.users,
    loggedUser: state.loggedUser
  }
}
export default connect(mapToStateProps, { loginUser })(SignInPage);