import React from "react";
import { StyleSheet, Text, View, Button, key } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import axios from "axios";
import { navigation } from "@react-navigation/stack";
import { useGlobal } from "../lib/globals";

const Cart = ({ navigation: { navigate } }) => {
  const { cartItems } = useGlobal();
  const submitOrder = () => {
    return axios
      .post(`https://bugi-api.herokuapp.com/api/products-orders`, {
        cartItems: [...cartItems]
      })
      .then(() => {
        navigate("Payment");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return [
    <Tables selectedProducts={cartItems} />,
    <View style={styles.container}>
      <View style={styles.button}>
        <ButtonWithBackground
          text="Pay Now"
          color="#2C7873"
          onPress={submitOrder}
        />
      </View>
    </View>
  ];
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    marginBottom: 100
  }
});

export default Cart;
