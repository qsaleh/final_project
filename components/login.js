import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import ButtonWithBackground from "../components/ButtonWithBackground";

const LogIn = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <TextInput
        label='Email'
      />
      <TextInput
        label='password'
      />
      <Text>Not a User?</Text>
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
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default LogIn;
