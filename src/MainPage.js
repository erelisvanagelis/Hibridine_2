import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { ListItem, Avatar, Button, Card, Icon } from 'react-native-elements'
import uuid from 'react-native-uuid';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const DATA = require('../data.json');

const Category = ({ category }) => {
    return (
        <View style={styles.container}>
            <View style={StyleSheet.create({ flex: 1 })}>
                <Avatar size="large" source={{ uri: category.imgUrl }} />
            </View>

            <View style={StyleSheet.create({ flex: 2 })}>
                <Text style={StyleSheet.create({ fontSize: 60 })}>{category.title}</Text>
            </View>
        </View>
    );
}

const Categories = ({ categories, navigation }) => {
    return (
        <View>
            {
                categories.map((l, i) => (

                    <ListItem key={i} bottomDivider
                        onPress={() =>
                            navigation.push('CategoryPage', {
                                category: l,
                            })}
                    >
                        <Category category={l} />
                    </ListItem>
                ))
            }
        </View>
    );

}

const MainPage = ({ navigation }) => {
    DATA.categories.map(category => {
        category.id = uuid.v4()
        category.items.map(item => {
            item.id = uuid.v4()
        })
    })

    return (
        <SafeAreaView>
            <ScrollView>
                <Categories categories={DATA.categories} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}
export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
    },
});

