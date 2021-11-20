import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    FlatList,
    View,
    TextInput,
    Alert,
} from 'react-native';

import {
    Button,
    Card,
    Icon,
    CheckBox,
    Input,
} from 'react-native-elements'

import { connect } from 'react-redux';
import { deleteAdvertD, updateAdvertD } from '../../appStore/actions/advertActions';

const UserAdvert = (props) => {
    const [title, setTitle] = useState(props.advert.title)
    const [description, setDescription] = useState(props.advert.description)
    const [price, setPrice] = useState(props.advert.price)

    const handleUpdate = () => {
        props.updateAdvertD(props.advert.id, title, description, price)
    }

    const handleDelete = () => {
        props.deleteAdvertD(props.advert.id)
    }

    return (
        <Card>
            <Input
                placeholder="Title"
                label="Title"
                value={title}
                onChangeText={value => setTitle(value)}
            />
            <Input
                placeholder="Price"
                label="Price"
                value={price}
                onChangeText={value => setPrice(value)}
            />
            <Input
                placeholder="Description"
                label="Description"
                value={description}
                onChangeText={value => setDescription(value)}
            />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                    title="Delete"
                    onPress={() => handleDelete()}
                />
                <Button
                    title="Update"
                    onPress={() => handleUpdate()}
                />
            </View>
        </Card>
    )
}

const mapToStateProps = (state) => {
    return {
      loggedUser: state.loggedUser
    }
  }
  export default connect(mapToStateProps, { deleteAdvertD, updateAdvertD })(UserAdvert);