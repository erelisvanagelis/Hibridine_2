/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, Text, StyleSheet, Button} from 'react-native';
 
 export default class App extends Component {
   constructor() {
     super();
     this.state = {
       name: 'VIKO',
       show: false,
     };
   }
   updateInformation() {
     if (this.state.show === false) {
       this.setState({
         name: 'EIF',
         show: true,
       });
     }
     if (this.state.show === true) {
       this.setState({
         name: 'VIKO',
         show: false,
       });
     }
   }
   render() {
     return (
       <View>
         <View>
            {/*<Button>test</Button>*/}
            <Text>Hello world</Text>
            <Text>Lithuania</Text>
            <View style={styles.sectionDescription}>
              <Text>Rugsejo 4</Text>
              <Text>{this.state.name}</Text>
              <Button title="Press me" onPress={() => this.updateInformation()} />
            </View>
         </View>
         {/*
         <View>
            <Button>test</Button>
            <Text>Hello world</Text>
            <Text>Lithuania</Text>
            <View style={styles.sectionDescription}>
              <Text>Rugsejo 4</Text>
              <Text>{this.state.name}</Text>
              <Button title="Press me" onPress={() => this.updateInformation()} />
            </View>
         </View>
         */}
         
         <Text>Hello world</Text>
         <Text>Lithuania</Text>
         <View style={styles.sectionDescription}>
           <Text>Rugsejo 4</Text>
           <Text>{this.state.name}</Text>
           <Button title="Press me" onPress={() => this.updateInformation()} />
         </View>
       </View>
     );
   }
 }
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: 'green',
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: 'white',
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     color: 'black',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     color: '#f0f',
   },
   highlight: {
     fontWeight: '700',
   },
   footer: {
     color: '#f0f',
     fontSize: 12,
     fontWeight: '600',
     padding: 4,
     paddingRight: 12,
     textAlign: 'right',
   },
   button: {
     alignItems: 'center',
     backgroundColor: '#f0f',
     padding: 10,
   },
 });
 