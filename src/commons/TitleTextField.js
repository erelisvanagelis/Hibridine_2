import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

const TitleTextField = ({ title, value, setValue }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>{title + ": "}</Text>
        <TextInput
          value={value}
          placeholder={"Enter your " + title}
          onChangeText={(text) => setValue(text)}
          secureTextEntry={false}
        />
      </View>
    );
  }
export default TitleTextField