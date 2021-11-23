import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    View,
    TextInput,
    Alert,
    Animated
} from 'react-native';

import {
    Button,
    Card,
    Icon,
    CheckBox,
    Input,
} from 'react-native-elements'

const LoadingCircle = ({ active }) => {
    const marginTop = new Animated.Value(20)
    const animate = () => {
        Animated.timing(
            this.marginTop,
            {
                toValue: 200,
                duration: 500,
            }
        ).start();
    }
    return (
        <View>
            {/* <Animated.View style={[
                {  height: 25,
                    width: 25,
                    background-color: #bbb;
                    border-radius: 50%;
                    display: inline-block;
                    }, 
                    { marginTop: marginTop }]} /> */}
        </View>
    )
}
export default LoadingCircle