import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import axios from "axios";

const ProductsDetails = ({ route, navigation: { navigate } }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/667888093731`)
      .then((response) => {
        setProduct(response.data[0]);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      <Text>name: {product.name}</Text>
      <Text>description: {product.description}</Text>
      <Text>Picture: {product.picture}</Text>
      <Text>price: {product.price}</Text>
      <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
      {/* pass (params) onPress */}
      <Button title="Cart" onPress={() => navigate("Cart", { product })} />
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