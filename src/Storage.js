/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
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

export const GetObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
         const value = JSON.parse(jsonValue);
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



