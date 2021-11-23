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
  Alert,
} from 'react-native';

import {
  Button,
  Card,
  Icon,
} from 'react-native-elements'

import UserAdvert from '../commons/UserAdvert';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts } from '../../appStore/actions/advertActions';

const MyAdvertsPage = () => {
  const { adverts } = useSelector(state => state.adverts)
  const { loggedUser } = useSelector(state => state.loggedUser)
  const [myAdverts, setMyAdverts] = useState([])
  const dispatch = useDispatch()
  const getAllAdverts = () => dispatch(getAdverts())
  useEffect(() => {
    try {
      getAllAdverts()
    } catch (error) {
      Alert.alert(error)
    }
  }, [])

  useEffect(() => {
    console.log("atnaujinamas")
    const filtered = []    
    try {
      if (adverts !== null) {
        adverts.map((advert) => {
          if (advert.userid === loggedUser.id) {
            filtered.push(advert);
          }
        })
        
      }

    } catch (error) {
      Alert.alert(error)
    }
    setMyAdverts(filtered)
  }, [adverts])

  const renderItem = ({ item }) => (
    <UserAdvert advert={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={myAdverts}
        extraData={myAdverts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default MyAdvertsPage;