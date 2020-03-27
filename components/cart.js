import React from "react";
import { StyleSheet, Text, View, Button, key } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import axios from "axios";
import { useGlobal } from '../lib/globals';

const Cart = ({ navigation: { navigate } }) => {
  const { cartItems } = useGlobal();
  console.log("cartItems in cart.js", cartItems);
  const submitOrder = () => {
    return axios
      .post(`https://bugi-api.herokuapp.com/api/products-orders`, { cartItems: [...cartItems] })
      .then(() => {
        navigate("Payment")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const total = cartItems.reduce(function (tot, product) {
    return tot + product.subTotal;
  }, 0);
  console.log(total)
  return [
    <Tables />,
    <View style={styles.container}>
      <Text>Total: ${total}</Text>
      <Button title="Continue Scanning" onPress={() => navigate("QRScanner")} />
      <ButtonWithBackground
        text="Pay Now"
        color="#2C7873"
        onPress={submitOrder}
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
