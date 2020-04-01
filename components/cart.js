import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import axios from "axios";
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
  const total = cartItems.reduce(function(tot, product) {
    return tot + product.subTotal;
  }, 0);
  return [
    <Tables key={1} selectedProducts={cartItems} />,
    <View key={2} style={styles.container}>
      <View style={styles.button}>
        <ButtonWithBackground
          text="Pay Now"
          color="#4285f4"
          onPress={() => navigate("Payment")}
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
  },
  total: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Cart;
