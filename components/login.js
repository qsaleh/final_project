import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import ButtonWithBackground from "../components/ButtonWithBackground";

const LogIn = ({ navigation: { navigate } }) => {
  state = {
    email: "",
    password: ""
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} label="Email" />
      <TextInput style={styles.textInput} label="password" />

      <View style={styles.button}>
        <ButtonWithBackground
          style={styles.button}
          text="Log-In"
          color="#4285f4"
          onPress={() => navigate("QRScanner")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/bugiOrange.png")}
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
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end",
    marginTop: 300,
    marginBottom: 80
  },
  textInput: {
    flex: 1,
    width: 300,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 40
  },
  logo: {
    flex: 0,
    justifyContent: "center",
    width: 350,
    height: 200,
    marginTop: 50
  }
});

export default LogIn;
