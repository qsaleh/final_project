import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { navigation } from "@react-navigation/stack";
import axios from "axios";

const ProductsDetails = ({route, navigation }) => {
  console.log('route.params.data', route.params.data);
     axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/${route.params.data}`)
      .then((response) => {
         return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      <Button title="Continue shopping" onPress={() => navigation.navigate("QRScanner")} />
      <Button title="Cart" onPress={() => navigation.navigate("Cart")} />
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
