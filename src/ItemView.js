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


const item = [
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
            {
                "step": 3,
                "description": "zingsnis3",
                "path": "https://i.imgflip.com/2rfd59.png"
            }
        ]
    },
]

export default class ItemView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: item,
            id: item.id,
            title: item.title,
            description: item.description,
            path: item.path,
            steps: item.steps,
        }
    }

    render() {
        console.log("this.state")
        console.log(this.state.item)
        return (
            <SafeAreaView>
                < Card >
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: this.state.path }} />
                    <Card.Divider />
                    <Text style={{ marginBottom: 10 }}>{this.state.description}</Text>
                    <Card.Divider />
                    {
                        console.log(this.state.item)
                    }
                    {/* <View>
                    {
                        this.state.steps.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={{ uri: l.avatar_url }} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.step}</ListItem.Title>
                                    <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View> */}
                </Card >
            </SafeAreaView>

        )
    }
}