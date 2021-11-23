/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

import {
  Button,
  CheckBox,
  Input,
} from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../appStore/actions/userActions';
import { getAutoLogin, setAutoLogin } from '../../appStore/actions/settingsActions';

const SignInPage = ({ navigation }) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(true)
  const [loading, setLoading] = useState(true)

  const { loggedUser } = useSelector(state => state.loggedUser)
  const { autoLogin } = useSelector(state => state.autoLogin)
  const dispatch = useDispatch()
  const getAutoLoginValue = () => dispatch(getAutoLogin())
  const setAutoLoginValue = (value) => dispatch(setAutoLogin(value))
  const loginNewUser = (name, password) => dispatch(loginUser(name, password))

  useEffect(() => {
    console.log("gaunamos vertes pirma kart atidarius ekrana")

    setLoading(true)
    getAutoLoginValue()
    setLoading(false)
  }, [])

  useEffect(() => {
    console.log("autoLoginAtnaujinimas")
    console.log(autoLogin)

    setLoading(true)
    if (autoLogin.active === true && loggedUser.id === null) {
      setName(autoLogin.name)
      setPassword(autoLogin.password)
      loginNewUser(autoLogin.name, autoLogin.password)
    }
    setLoading(false)
  }, [autoLogin])

  useEffect(() => {
    console.log("loggedUserAtnaujinimas")
    console.log(loggedUser)

    setLoading(true)
    if (loggedUser.id !== null) {
      if (checked) {
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
      setLoading(false)
      navigation.navigate('AdvertTabs')
    }
    // else if (loggedUser.name == '') {
    //   Alert.alert("User doesn't exist or password doen't match")
    // }
  }, [loggedUser])

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <StatusBar
        // animated={loading}
        // backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false} />
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
        // checked={autoLogin.active}
        // onPress={() => setAutoLoginValue({
        //   active: !autoLogin.active,
        //   name: autoLogin.name,
        //   password: autoLogin.password,
        // })}
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignUpPage')} />
        <Button title="Sign in" onPress={() => {
          console.log("pries kvieciant loginNewUser:")
          loginNewUser(name, password)
        }} />
      </View>
    </SafeAreaView>
  );
}

export default SignInPage;