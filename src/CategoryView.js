/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

import ItemCard from './ItemCard'
import ItemView from './ItemView'



const items = [
    {
        "id": 0,
        "title": "Michael's Secret Stuff",
        "description": "veryj tejtyj special juice",
        "path": "https://i.redd.it/e2qdjb1muh061.jpg",
        "steps": [
            {
                "step": 1,
                "description": "zingsnis",
                "path": "https://i.imgflip.com/2rfd59.png"
            },
            {
                "step": 2,
                "description": "zingsnis2",
                "path": ""
            },
            {}
        ]
    },
    {
        "id": 1,
        "title": "Kvass",
        "description": "Grandmas Kvass",
        "path": "https://thumbs.dreamstime.com/z/yellow-barrel-trailer-black-wheels-drink-kvass-inscription-russian-ornament-its-board-national-background-182319365.jpg",
        "steps": [
            {
                "step": 1,
                "description": "zingsnis",
                "path": "https://i.imgflip.com/2rfd59.png"
            },
            {
                "step": 2,
                "description": "zingsnis2",
                "path": ""
            },
            {}
        ]
    }
]
const Stack = createNativeStackNavigator();

export default class CategoryView extends Component {
    Items(items) {
        return (
            <View>
                <FlatList
                    keyExtractor={() => items.id}
                    data={items}
                    renderItem={({ item }) => {
                        return (
                            // <ItemCard
                            //     id={item.id}
                            //     title={item.title}
                            //     description={item.description}
                            //     path={item.path}
                            //     steps={item.steps}
                            // />
                            this.Item(item)
                        )
                    }}
                />
            </View>
        )
    }

    Item(item) {
        return (
            < Card >
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: item.path }} />
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>{item.description}</Text>
                <Card.Divider />
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Details'
                    onPress={() => this.props.navigation.push('Recept')}
                />
            </Card >
        )
    }

    render() {
        return (

            <SafeAreaView>
                {/* <Stack.Navigator>
                    <Stack.Screen name='Recept' component={ItemView} />

                </Stack.Navigator> */}
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Details'
                    onPress={() => this.props.navigation.push('Recept')}
                />

                {
                     this.Items(items) 
                }
            </SafeAreaView>

        )
    }
}
