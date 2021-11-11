import OvalTextBoxView from '../components/oval-text-box';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, useWindowDimensions, Alert, Text, Image, TouchableOpacity } from 'react-native';
import OvalButton from '../components/oval-button';
import TextInputBox from '../components/text-input-box';
import { COLORS } from '../constants';


export default function LoginScreen() {
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions();
  //width of user input category = 0.8 of device width
  const inputsWidth = deviceWidth * 0.8
  return(
    <View style={{flex: 1}}>
      <HeaderContainer inputsWidth={inputsWidth} style={[styles.container,]}/>
      <LoginsContainer inputsWidth={inputsWidth} style={[styles.container,]}/>
      <FooterContainer inputsWidth={inputsWidth} style={[]}/>
    </View>
  );
}

function HeaderContainer(props){
  return(
    <View style={props.style}>
      <View style={[{flex: 1, justifyContent: 'flex-end'}]}>
        <WelcomeToBox width={props.inputsWidth}/>
      </View>
      <View style={styles.container}>
        <LogoBox />
      </View>
    </View>
  )
}

function LoginsContainer(props) {
  return(
    <View style={props.style}>
      <UserInput inputsWidth={props.inputsWidth} />
      <ForgotPasswordBox inputsWidth={props.inputsWidth}/>
    </View>
  );
}

function FooterContainer(props) {
  return(
    <View style={[{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      }]} 
    >
      <LowerFooterContainer />
    </View>
  );
}

function WelcomeToBox(props) {
  return(
    <Text style={[styles.text, {fontSize: 25}]}>Welcome to</Text>
  );
}

function LogoBox() {
  return(
    <Image source={require('../assets/img/book-worm-logo.png')} />
  );
}

function UserInput(props) {
  return (
    <View style={styles.container}>
      <UserInputTextBox boxType="Username" width={props.inputsWidth}/>
      <UserInputTextBox boxType="Password" width={props.inputsWidth} secureTextEntry={true}/>
      <OvalButton buttonText="Login" width={props.inputsWidth} onPress={()=>{Alert.alert('Login pressed')}}/>
    </View>
  );
}

function ForgotPasswordBox(props) {
  return(
    <View style={{width: props.inputsWidth,
      alignItems: 'center',
      justifyContent:'center'}}
    >
      <ForgotPasswordButton/>
      <ErrorMessage/>
    </View>
  );
}

function ForgotPasswordButton() {
  return(
    <View style={[{
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 30,
    }]}>
      <TouchableOpacity 
        onPress={()=>{Alert.alert('Forgot Password pressed')}}
      >
        <Text style={styles.text} >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function ErrorMessage() {
  //if error then return error
  //else
  //return null
  const error = false;
  let errorText = 'Something went wrong (sample error text)';
  if (!error) {
    errorText= null;
  }
  return(
    <View style={[{
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 30,
    }]}>
      <Text style={[styles.text,{color: 'red'}]} 
      >
        {errorText}
      </Text>
    </View>
  );
  
}

function LowerFooterContainer(props) {
  return(
    <View style={[{
      flexDirection: 'row',
      flex: 1,
      alignItems: 'flex-end',
      // justifyContent: 'flex-end',
    }]}>
      <ImgWorm/>
      <SignUpPromptContainer/>
    </View>
  );
}

function ImgWorm() {
  return(
    <Image source={require('../assets/img/wormy-closeup.png')} />
  );
}

function SignUpPromptContainer() {
  return(
    <View style={[{
      flex: 1,
      alignItems: 'center',
    }]}>
      <SignUpPrompt/>
      <SignUpButton/>
    </View>
  )
}

function SignUpPrompt() {
  return(
    <OvalTextBoxView >
      <Text style={[{
        color: COLORS.textColor,
        paddingHorizontal: 15
      }]}>
        Don't have an account?
      </Text>
    </OvalTextBoxView>
  );
}

function SignUpButton() {
  return(
    <View style={[{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    }]}>
      <TouchableOpacity style={{
        justifyContent: 'center', 
        alignItems: 'center', 
        }} 
        onPress={()=>{Alert.alert("pressed Sign Up button")}}
      >
        <Text style={[
          {color: COLORS.highlightColor}, 
          {fontSize: 35}, 
          {fontWeight: "bold"}]} >
            Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function UserInputTextBox(props) {
  return(
    <View style={[styles.container]}>
      <OvalTextBoxView width={props.width} >
        <TextInputBox boxType={props.boxType} width={props.width*0.8} secureTextEntry={props.secureTextEntry}/>
      </OvalTextBoxView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInputTextBox: {
    alignItems: 'center',
    justifyContent: "center",
  },
  text: {
    color: '#828282',
    fontSize: 14,
  }
});
