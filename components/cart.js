import React from "react";
import { StyleSheet, Text, View, Button, key } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import Receipt from "../components/receipt";
import axios from "axios";
import { navigation } from "@react-navigation/stack";
const Cart = ({ navigation: { navigate } }) => {
  return [
    <Tables />,
    <View style={styles.container}>
      <Button title="Continue Scanning" onPress={() => navigate("QRScanner")} />
      <ButtonWithBackground
        text="Pay Now"
        color="#2C7873"
        onPress={() => navigate("Payment")}
      />
    </View>
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Cart;
