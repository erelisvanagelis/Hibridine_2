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

import { useSelector, useDispatch } from 'react-redux';
import { getAdverts } from '../../appStore/actions/advertActions';

const AllAdvertsPage = () => {
  const {adverts} = useSelector(state => state.adverts)
  const dispatch = useDispatch()
  const getAllAdverts = () => dispatch(getAdverts())
  useEffect(() => {
    try {
      getAllAdverts()
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
        data={adverts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default AllAdvertsPage;