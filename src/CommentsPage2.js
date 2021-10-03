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

const TopCard = ({ id }) => {
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [comments, setComments] = useState(GetObject('id'));

    return (
        <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>I'm Moderator</Text>
                <Switch
                    value={checked}
                    onValueChange={(value) => setChecked(value)} />
            </View>
            <Card.Divider />
            <TextInput
                placeholder="Name"
                onChangeText={(value) => {
                    setName(value)
                    console.log("name: " + name)
                }}
            />
            <TextInput
                placeholder="Opinion?"
                onChangeText={(value) => {
                    setText(value)
                    console.log("text: " + text)
                }}
            />
            <Card.Divider />
            <Button
                title="Add comment"
                onPress={() => {
                    const commentObj = {
                        id: uuid.v4(),
                        name: name,
                        text: text,
                    }

                    if (comments == null) {
                        //const newArray = [commentObj]
                        console.log('comments are null:' + comments)
                        setComments(Array.of(commentObj))
                        //InsertObject('id', Array.of(commentObj))
                    }
                    else {
                        console.log('comments are not:' + comments)
                        setComments(...comments, commentObj)
                        //const newArray = [...comments, commentObj]
                        //InsertObject('id', newArray)
                    }

                }} />
        </Card>
    );
}

const CommentItem = ({ comment }) => {
    return (
        <ListItem key={comment.id} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{comment.name}</ListItem.Title>
                <ListItem.Subtitle>{comment.text}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}

const CommentsPage = ({ navigation, route }) => {
    const { title, id } = route.params
    const [comments, setComments] = useState(GetObject('id'))
    const [test, setTest] = useState([])
    const testas = {'id': uuid.v4(), 'text': 'grybas'}
    useEffect(() => {
        navigation.setOptions({ title: title + ' - Comments' })
        setTest(GetObject('id'))
    }, []);
    // { console.log(GetObject('id')) }
    return (

        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

        </SafeAreaView>
    );
}
export default CommentsPage