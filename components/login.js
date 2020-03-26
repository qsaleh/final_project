import React, { useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import ButtonWithBackground from "../components/ButtonWithBackground";

const LogIn = ({ navigation: { navigate } }) => {
  state = {
    email: '',
    password: ''
 }
 handleEmail = (text) => {
    this.setState({ email: text })
 }
 handlePassword = (text) => {
    this.setState({ password: text })
 }
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
 }
  return (
    <View style={styles.container}>
       <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              //  onChangeText = {this.handleEmail}
              />
     <TextInput secureTextEntry={true} 
            style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              //  onChangeText = {this.handlePassword}
               />
      
      <ButtonWithBackground
        style={styles.button}
        text="Log-In"
        color="#2C7873"
        onPress={() => navigate("QRScanner")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
 },
 input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
  button: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default LogIn;
