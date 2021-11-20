import AsyncStorage from '@react-native-async-storage/async-storage';

export const insertValue = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log(e)
    }
}

export const insertObject = async (key, object) => {
    try {
        const jsonValue = JSON.stringify(object);
        insertValue(key, jsonValue)
    } catch (e) {
        console.log(e);
    }
}

export const getValue = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log(e);
    }
}

export const getObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        const value = JSON.parse(jsonValue);
        return value
    } catch (e) {
        console.log(e);
    }
}