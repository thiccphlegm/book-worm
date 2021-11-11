import React, {useState} from 'react';
import { StyleSheet, View, TextInput, useWindowDimensions, Alert, Text } from 'react-native';

export default function TextInputBox(props) {
  const [text, setText] = useState("");
  return (
    <View style={{ width: props.width}} >
      <TextInput 
        style={styles.userInputText}
        placeholder={props.boxType} 
        onChangeText={text => setText(text)} 
        defaultValue={text}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userInputText: {
    color: '#828282',
    fontSize: 14,
    minHeight: 44
  }
});
