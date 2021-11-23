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

const Advert = ({ advert }) => {
    return (
        <Card>
            <Card.Title>{advert.title}</Card.Title>
            <Card.Divider />
            <Text>Price: {advert.price}</Text>
            <Text>Description:</Text>
            <Text>{advert.description}</Text>
            <Card.Divider />
            <Text>Name: {advert.name}</Text>
            <Text>Phone: {advert.phone}</Text>
        </Card>
    )
}
export default Advert