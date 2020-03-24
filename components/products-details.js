import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import axios from "axios";
import { useGlobal } from '../lib/globals';

const ProductsDetails = ({ route, navigation: { navigate } }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useGlobal()
  // route.params.data is  (EAN-13)
  // heokuapp -api requires UPC-A
  // google it
  // boolean valid = EAN13CheckDigit.INSTANCE.isValid(code);
  // const upcnumber = {(route.params.data)}
  useEffect(() => {
    console.log(route.params.data, "gdfhghjjlhkgjfhgjkl;kjhghj");
    axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/${route.params.data}`)
      .then((response) => {
        setProducts(response.data[0]);
        console.log("products", products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //post
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
      {/* pass (params) onPress */}
      <Button title="Add to Cart" onPress={() => addToCart(products)} />
      <Button title="Cart" onPress={() => navigate("Cart")} />
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