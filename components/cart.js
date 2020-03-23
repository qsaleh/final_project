import React from "react";
import { StyleSheet, Text, View, Button, key } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Tables from "../components/tables";
import Receipt from "../components/receipt";
import axios from "axios";
const Cart = ({ navigation: { navigate }, route }) => {
  const { products } = route.params;
  console.log( " product", products);
  return [
    <Tables selectedProducts={products} />,
    <View style={styles.container}>
      <Button title="Continue Scanning" onPress={() => navigate("QRScanner")} />
      <ButtonWithBackground
        text="Pay Now"
        color="#2C7873"
        // onPress={() => navigate("Receipt")}
        onPress={() => {
          axios
            .post(`https://bugi-api.herokuapp.com/api/orders/`)
            .then((response) => {
              navigate("Receipt");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
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
