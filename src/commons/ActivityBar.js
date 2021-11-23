import React, { Component, useState } from 'react';
import {
    Image,
    StyleSheet,
    Button,
    View,
    Text,
    Dimensions,
    Animated,
    Easing,
    SafeAreaView
} from 'react-native';

const ActivityBar = ({ active }) => {
    const [animatedValue, setAnimatedValue] = useState(0)
    const startAnimation = () => {
        setAnimatedValue(0);
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startAnimation());
    };

    const left1 = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-cloudWidth, width],
    });

    return (
        <View style={{flex: 2}}>
            <Animated.View  style={{flex: 1}}/>

        </View>
    )

}
export default ActivityBar

const { width, height } = Dimensions.get('window');
const cloudWidth = 60;
class App extends Component {
    state = {
        fadeSun: new Animated.Value(0),
        animatedValue: new Animated.Value(0),
    };
    fadeSunIN = () => {
        Animated.timing(this.state.fadeSun, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };

    startAnimation = () => {
        this.state.animatedValue.setValue(0);
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => this.startAnimation());
    };
    render() {
        const left1 = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-cloudWidth, width],
        });
        const left2 = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-cloudWidth * 5, width + cloudWidth * 5],
        });
        return (
            <SafeAreaView>
                <View>
                    <Text>Hello</Text>
                    <Button title="SUN" onPress={this.fadeSunIN} />
                    <Animated.Image
                        style={[styles.logo, { opacity: this.state.fadeSun }]}
                        source={require('./src/images/sun.png')}
                    />
                    <Button title="Animation" onPress={this.startAnimation} />
                </View>
                <View>
                    <Animated.Image
                        style={[styles.cloud1, { left: left1 }]}
                        source={require('./src/images/cloud.png')}
                    />
                    <Animated.Image
                        style={[styles.cloud2, { left: left2 }]}
                        source={require('./src/images/sun.png')}
                    />
                    <Image
                        style={[styles.plane]}
                        source={require('./src/images/plane.png')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    cloud1: {
        position: 'absolute',
        width: cloudWidth,
        height: cloudWidth,
        top: height / 3 - cloudWidth / 2,
    },
    cloud2: {
        width: cloudWidth * 1.5,
        height: cloudWidth * 1.5,
        top: height / 2,
    },
    plane: {
        position: 'absolute',
        width: cloudWidth * 1.3,
        height: cloudWidth * 1.3,
        top: height / 2 - cloudWidth,
        left: width / 2 - cloudWidth / 2,
    },
    logo: {
        width: 100,
        height: 100,
    },
});
export default App;