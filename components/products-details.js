import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { navigation } from "@react-navigation/stack";
import axios from 'axios';

const ProductsDetails = ({ navigation: { navigate } }) => {
  const showProducts = function() {
    axios.get(`http://bugi-api.herokuapp.com/api/product-details`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  }
  return (
    <View style={styles.container}>
      <Text>showProducts</Text>
      <Button
      title="Continue shopping"
      onPress={
          () => navigate('QRScanner')}/>
      <Button
      title="Cart"
      onPress={
          () => navigate('Cart')}/>
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

export default ProductsDetails;
