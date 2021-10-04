import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'
import uuid from 'react-native-uuid';

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
                            })}>
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
        alignItems: 'center',
    },
});

