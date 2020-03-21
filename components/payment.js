import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Card from "../components/card-info";
import { navigation } from "@react-navigation/stack";
import axios from 'axios';
const Payment = ({ navigation: { navigate } }) => {
  const confirmPayment = () => {
    axios
      .post(`https://bugi-api.herokuapp.com/api/orders/`)
      .then((response) => {
        navigate("Receipt");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return [
    <Card />,
    <View style={styles.container}>
      <ButtonWithBackground
        text="confirm payment"
        color="#2C7873"
        onPress={confirmPayment}
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

export default Payment;
