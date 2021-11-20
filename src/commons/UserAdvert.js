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

import Advert from './Advert';

const UserAdvert = ({ advert }) => {
    return (
        <Card>
            <View style={{ flexDirection: 'row' }}>
                <Button title='Remove' onPress={ } />
                <Button title='Update' onPress={ } />
                <Advert advert={advert} />
            </View>
        </Card>
    )
}
export default UserAdvert