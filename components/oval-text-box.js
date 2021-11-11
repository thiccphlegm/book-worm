import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//props can come from stylesheet or component using the box
export default function OvalTextBoxView(props) {
  return(
    <View style={styles.container}>
      <View style = {[styles.ovalTextBoxView, props.backgroundColor ? {backgroundColor: props.backgroundColor} : undefined]} width={props.width}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ovalTextBoxView: {
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});