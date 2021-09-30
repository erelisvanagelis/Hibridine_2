/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import {
    ListItem,
    Avatar,
    Button,
    Card,
    Icon,
} from 'react-native-elements'
import ItemView from './ItemView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


export default class ItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            title: props.title,
            description: props.description,
            path: props.path,
            steps: props.steps,
        }
    }

    Item() {
        return (
            < Card >
                <Card.Title>{this.state.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: this.state.path }} />
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>{this.state.description}</Text>
                <Card.Divider />
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Details'
                    onPress={() => this.props.navigation.navigate('Recept')}
                     />
            </Card >
        )
    }


    render() {
        return (
            this.Item()
        )
    }
}
