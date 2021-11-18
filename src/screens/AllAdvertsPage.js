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

const AllAdvertsPage = (props) => {
  const navigation = useNavigation()
  return(
    <SafeAreaView>
      <Text>YEET</Text>
      <Button title="Advert" onPress={() => navigation.navigate('AdvertPage')}/>
    </SafeAreaView>
  );
}
export default AllAdvertsPage