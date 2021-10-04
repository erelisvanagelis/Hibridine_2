/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    View,
    FlatList,
} from 'react-native';

import {
    ListItem,
    Avatar,
    Button,
    Card,
    Switch,
} from 'react-native-elements'

import uuid from 'react-native-uuid';

import {
    InsertObject,
    GetObject,
} from './Storage'

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

    TopCard = () => {
        return (
            <Card>
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
                        if (this.state.name == '' || this.state.text == '') {
                            alert('Enter something')
                        }
                        else {
                            const comment = {
                                id: uuid.v4(),
                                name: this.state.name,
                                text: this.state.text,
                            }

                            const comments = [...this.state.comments, comment]
                            InsertObject(this.props.route.params.id, comments)
                            GetObject(this.props.route.params.id).then((value) => this.setState({ comments: value, name: '', text: '' }))
                        }
                    }} />
            </Card>
        );
    }

    ListCard = () => {
        return (
            <View style={{ padding: 15 }}>
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
            </View>

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
                        if (this.state.mod == true) {
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
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Comments</Text>
                <Card.Divider />
                <FlatList
                    keyExtractor={(comment) => comment.id}
                    data={this.state.comments}
                    renderItem={this.renderItem} />
            </SafeAreaView>
        );
    }
}