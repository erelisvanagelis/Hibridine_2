/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';

import {
    ListItem,
    Avatar,
    Button,
    Card,
    Icon,
} from 'react-native-elements'

const RecipeeCard = ({ recipee }) => {
    return (
        < Card >
            <Card.Image source={{ uri: recipee.imgUrl }} />
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>{recipee.description}</Text>
            <Card.Divider />
        </Card >
    )
}

const RecipeeIngredient = ({ ingredient }) => {
    return (
        <View style={styles.container}>
            <View style={StyleSheet.create({ flex: 3 })}>
                <Text>{ingredient.product}</Text>
            </View>
            <View style={StyleSheet.create({ flex: 1 })}>
                <Text>{ingredient.ammount}</Text>
            </View>
            <View style={StyleSheet.create({ flex: 1 })}>
                <Text>{ingredient.measurement}</Text>
            </View>
        </View>
    );
}

const RecipeeIngredients = ({ ingredients }) => {
    return (
        <Card>
            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 20 }}>Ingredients</Text>
            </View>

            <Card.Divider />
            {
                ingredients.map((ingredient) => {
                    return (
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <RecipeeIngredient ingredient={ingredient} />
                            </View>
                            <Card.Divider />
                        </View>

                    );
                })
            }
        </Card>
    )
}

const RecipeeStep = ({ step }) => {
    return (
        <View style={{
            padding: 10,
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'stretch',
            }}>
                <View style={{ flex: 2 }}>
                    <Avatar size="medium" title={step.step} backgroundColor='grey' rounded='true' />
                </View>
                <View style={{ flex: 8, alignItems: 'flex-start' }}>
                    <Text >{step.description}</Text>
                </View>
            </View>
        </View>
    );
}

const RecipeeSteps = ({ steps }) => {
    return (
        <Card>
            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 20 }}>Steps</Text>
            </View>
            <Card.Divider />
            {
                steps.map((strep) => (
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <RecipeeStep step={strep} />
                        </View>
                        <Card.Divider />
                    </View>
                ))
            }
        </Card>
    );

}

const RecipeePage = ({ navigation, route }) => {
    const { recipee } = route.params
    useEffect(() => {
        navigation.setOptions({ title: recipee.title })
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <RecipeeCard recipee={recipee} />
                <RecipeeIngredients ingredients={recipee.ingredients} />
                <RecipeeSteps steps={recipee.steps} />
                <Button title='Comments' 
                onPress={() => {
                    navigation.push('CommentsPage', {
                        id: recipee.id,
                        title: recipee.title
                        })}}/>
            </ScrollView>

        </SafeAreaView>
    )
}
export default RecipeePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
    },
});