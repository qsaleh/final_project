import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import ButtonWithBackground from "../components/ButtonWithBackground";

const Payment = ({ navigation: { navigate } }) => {
  return (
    <View >
      <TextInput
        label='Email'
      />
      <TextInput
        label='password'
      />
      <ButtonWithBackground
        text="confirm payment"
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
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Payment;
