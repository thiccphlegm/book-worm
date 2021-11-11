import OvalTextBoxView from '../components/oval-text-box';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, useWindowDimensions, Alert, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';


export default function OvalButton(props) {
  return(
    <OvalTextBoxView backgroundColor={COLORS.highlightColor} width={props.width}>
      <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center' , width: props.width }} onPress={props.onPress}>
        <Text style={[
          {color: 'white'}, 
          {fontSize: 20}, 
          {fontWeight: "bold"}]} >
            {props.buttonText}
        </Text>
      </TouchableOpacity>
    </OvalTextBoxView>
  );
}