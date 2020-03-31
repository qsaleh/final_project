import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Card from "../components/card-info";
import { navigation } from "@react-navigation/stack";
import Stripe from "react-native-stripe-api";
const Payment = ({ navigation: { navigate } }) => {
  const confirmPayment = () => {
    const apiKey = "pk_test_Jxd3WCtPiiGGGQORl0AxKkN500Ta61gIx2";
    const client = new Stripe(apiKey);
    client
      .createToken({
        number: "4242424242424242",
        exp_month: "09",
        exp_year: "22",
        cvc: "111"
      })
      .then((res) => {
        navigate("Receipt");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return [
    <Card key={1} />,
    <View key={2} style={styles.container}>
      <ButtonWithBackground
        text="Confirm payment"
        color="#4285f4"
        onPress={confirmPayment}
      />
    </View>
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  }
});

export default Payment;
