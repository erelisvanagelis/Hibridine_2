/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   Text,
   FlatList,
 } from 'react-native';
 
 import {
   Button,
   Card,
   Icon,
 } from 'react-native-elements'

 import UserAdvert from '../commons/UserAdvert';
 import { connect } from 'react-redux';
 import { getUserAdverts } from '../../appStore/actions/advertActions';

const MyAdvertsPage = (props) => {

  useEffect(() => {
    try {
      props.getUserAdverts(props.loggedUser.loggedUser.id)
    } catch (error) {
      Alert.alert(error)
    }
  }, [])

  const renderItem = ({ item }) => (
    <UserAdvert advert={item} />
  );

  return(
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
    adverts: state.adverts,
    loggedUser: state.loggedUser
  }
}
export default connect(mapToStateProps, { getUserAdverts })(MyAdvertsPage);