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

import Advert from '../commons/Advert';

import { connect } from 'react-redux';
import { getAdverts } from '../../appStore/actions/advertActions';

const AllAdvertsPage = (props) => {
  useEffect(() => {
    try {
      props.getAdverts()
      console.log("Testuoju ar array")
      console.log(props.adverts.adverts)
      console.log("Testuoju ar array")
    } catch (error) {
      Alert.alert(error)
    }
  }, [])

  const renderItem = ({ item }) => (
    <Advert advert={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={props.adverts.adverts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const mapToStateProps = (state) => {
  return {
    adverts: state.adverts
  }
}
export default connect(mapToStateProps, { getAdverts })(AllAdvertsPage);