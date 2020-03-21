import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";
import Card from "../components/card-info";
import { navigation } from "@react-navigation/stack";
import axios from 'axios';

const Payment = ({ navigation: { navigate } }) => {
  return (
    <Card />
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
