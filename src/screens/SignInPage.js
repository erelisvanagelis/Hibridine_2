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
  View,
} from 'react-native';

import {
  Button,
  CheckBox,
  Input,
} from 'react-native-elements'

import { useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../../appStore/actions/userActions';
import { getAutoLogin, setAutoLogin } from '../../appStore/actions/settingsActions';

const SignInPage = ({ navigation }) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const { loggedUser } = useSelector(state => state.loggedUser)
  const { autoLogin } = useSelector(state => state.autoLogin)
  const dispatch = useDispatch()
  const getAutoLoginValue = () => dispatch(getAutoLogin())
  const setAutoLoginValue = (value) => dispatch(setAutoLogin(value))
  const loginNewUser = (name, password) => dispatch(loginUser(name, password))

  useEffect(() => {
    console.log("gaunamos vertes pirma kart atidarius ekrana")
    getAutoLoginValue()
  }, [])

  useEffect(() => {
    console.log("autoLoginAtnaujinimas")
    console.log(autoLogin)
    if (autoLogin.active === true && loggedUser.id === null) {
      setName(autoLogin.name)
      setPassword(autoLogin.password)
      loginNewUser(autoLogin.name, autoLogin.password)
    }
  }, [autoLogin])

  useEffect(() => {
    console.log("loggedUserAtnaujinimas")
    console.log(loggedUser)
    if (loggedUser.id !== null) {
      if (autoLogin.active) {
        setAutoLoginValue({
          active: true,
          name: name,
          password: password
        })
      } else {
        setAutoLoginValue({
          active: false,
          name: '',
          password: ''
        })
      }
      navigation.navigate('AdvertTabs')
    }
  }, [loggedUser])

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Input
        label="Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <CheckBox
        title="Do you want to remain signed in?"
        checked={autoLogin.active}
        onPress={() => setAutoLoginValue({
          active: !autoLogin.active,
          name: autoLogin.name,
          password: autoLogin.password,
        })}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignUpPage')} />
        <Button title="Sign in" onPress={() => {
          console.log("pries kvieciant loginNewUser:")
          console.log(name)
          console.log(password)
          loginNewUser(name, password)
        }} />
      </View>
    </SafeAreaView>
  );
}

export default SignInPage;