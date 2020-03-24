import React from "react";
import { StyleSheet, Text, View, Button, key } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import Receipt from "../components/receipt";
import axios from "axios";
import { route, navigation } from "@react-navigation/stack";
const Cart = ({ navigation: { navigate }, route }) => {
  const { products } = route.params;
  console.log(" product", products);
  return [
    <Tables selectedProducts={products} />,
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
    justifyContent: "center",
    justifyContent: 'flex-end',
    marginBottom: 36
  },
});

export default Cart;
