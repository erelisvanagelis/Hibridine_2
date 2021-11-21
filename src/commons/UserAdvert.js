import React, { useState } from 'react';
import { View, } from 'react-native';
import { Button, Card, Input, } from 'react-native-elements'
import { useDispatch } from 'react-redux';
import { deleteAdvertD, updateAdvertD } from '../../appStore/actions/advertActions';

const UserAdvert = ({ advert }) => {
    const [title, setTitle] = useState(advert.title)
    const [description, setDescription] = useState(advert.description)
    const [price, setPrice] = useState(advert.price)

    const dispatch = useDispatch()
    const deleteCurrentAdvert = (id) => dispatch(deleteAdvertD(id))
    const updateCurrentAdvert = (id, title, description, price) => dispatch(updateAdvertD(id, title, description, price))

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

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    title="Delete"
                    onPress={() => deleteCurrentAdvert(advert.id)}
                />
                <Button
                    title="Update"
                    onPress={() => updateCurrentAdvert(advert.id, title, description, price)}
                />
            </View>
        </Card>
    )
}

export default UserAdvert;