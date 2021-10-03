/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput, TouchableOpacity, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const InsertValue = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e)
    }
}

export const InsertObject = async (key, object) => {
    try {
        console.log(object);
        const jsonValue = JSON.stringify(object);
        console.log(jsonValue);
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

export const GetObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        console.log('GetObjectJsonValue: ' + jsonValue);
         const value = JSON.parse(jsonValue);
         console.log('GetObject: ' + value);
        return value
    } catch (e) {
        console.log(e);
    }
}

export const RemoveValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}



