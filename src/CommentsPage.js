/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
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
    Switch,
} from 'react-native-elements'

import uuid from 'react-native-uuid';

import {
    InsertObject,
    InsertValue,
    GetObject,
    GetValue,
    RemoveValue,
} from './Storage'
import { thisExpression } from '@babel/types';

export default class CommentsPage extends Component {
    constructor() {
        super()
        this.state = {
            mod: false,
            name: '',
            text: '',
            comments: []
        }
    }

    ModSwitch = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>I'm Moderator</Text>
                <Switch
                    value={this.state.mod}
                    onValueChange={(mod) => this.setState({ mod })} />
            </View>
        );

    }

    TopCard = () => {
        return (
            <Card>
                {/* <this.ModSwitch /> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>I'm Moderator</Text>
                    <Switch
                        value={this.state.mod}
                        onValueChange={(mod) => this.setState({ mod })} />
                </View>
                <Card.Divider />
                <TextInput
                    placeholder="Name"
                    value={this.state.name}
                    onChangeText={(name) => {
                        this.setState({ name })
                        console.log("name: " + this.state.name)
                    }}
                />
                <TextInput
                    placeholder="Opinion?"
                    value={this.state.text}
                    onChangeText={(text) => {
                        this.setState({ text })
                        console.log("text: " + this.state.text)
                    }}
                />
                <Card.Divider />
                <Button
                    title="Add comment"
                    onPress={() => {
                        const comment = {
                            id: uuid.v4(),
                            name: this.state.name,
                            text: this.state.text,
                        }

                        console.log('comments to add:' + comment)
                        console.log(comment)
                        const comments = [...this.state.comments, comment]
                        console.log('after merge, before insert:' + comments)
                        InsertObject(this.props.route.params.id, comments)
                        console.log('maybe after insert:' + comment)
                        GetObject(this.props.route.params.id).then((value) => this.setState({ comments: value, name: '', text: '' }))
                        console.log('maybe after get:' + comment)
                    }} />
            </Card>
        );
    }

    ListCard = () => {
        return (
            <Card >
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Comments</Text>
                <Card.Divider />
                <FlatList
                    keyExtractor={(comment) => comment.id}
                    data={this.state.comments}
                    renderItem={({ item }) => {
                        return (
                            <ListItem bottomDivider>
                                <Avatar source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
                                <ListItem.Content>
                                    <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                                    <ListItem.Title>{item.text}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        )
                    }}
                />
            </Card>
        );
    }

    componentDidMount() {
        this.props.navigation.setOptions({ title: this.props.route.params.title + ' - Comments' })
        GetObject(this.props.route.params.id).then((value) => {
            if (value !== null) {
                this.setState({ comments: value })
            }
        })

    }

    RemoveComment(id) {
        const index = this.state.comments.findIndex((x) => x.id == id)
        this.setState({
            comments: this.state.comments.filter((_, i) => i !== index)
        });
    }

    renderItem = ({ item }) => {
        return (
            <ListItem bottomDivider>
                <Avatar
                    onPress={() => {
                        if(this.state.mod == true){
                        this.RemoveComment(item.id)
                        InsertObject(this.props.route.params.id, this.state.comments)                            
                        }
                        else {
                            alert("Need to be moderator to delete comments")
                        }

                    }}
                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_07-512.png' }} />
                <ListItem.Content>
                    <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                    <ListItem.Title>{item.text}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }
    render() {
        return (

            <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
                <this.TopCard />

                {/* <this.ListCard /> */}
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Comments</Text>
                <Card.Divider />
                <FlatList
                    keyExtractor={(comment) => comment.id}
                    data={this.state.comments}
                    renderItem={this.renderItem}
                // renderItem={({ item }) => {
                //     return (
                //         <ListItem bottomDivider>
                //             <Avatar source={{ uri: 'https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_07-512.png' }} />
                //             <ListItem.Content>
                //                 <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                //                 <ListItem.Title>{item.text}</ListItem.Title>
                //             </ListItem.Content>
                //         </ListItem>
                //     )
                // }}
                />

            </SafeAreaView>
        );
    }

}