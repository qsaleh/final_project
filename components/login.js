import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
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
      <TextInput label="Email" />
      <TextInput label="password" />
      <Text>Not a User?</Text>
      <View style={styles.button}>
        <ButtonWithBackground
          style={styles.button}
          text="Log-In"
          color="#2C7873"
          onPress={() => navigate("QRScanner")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end",
    marginBottom: 300
  }
});

export default LogIn;
