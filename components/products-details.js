import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import axios from "axios";
import { useGlobal } from '../lib/globals';

const ProductsDetails = ({ route, navigation: { navigate } }) => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useGlobal()
  // route.params.data is  (EAN-13)
  // heokuapp -api requires UPC-A
  // google it
  // boolean valid = EAN13CheckDigit.INSTANCE.isValid(code);

  console.log('route.params.data', route.params.data);
  const stringToSearch = `%${route.params.data.slice(3, 9)}%`;
  console.log('stringToSearch', stringToSearch);

  useEffect(() => {
    console.log(route.params.data, "gdfhghjjlhkgjfhgjkl;kjhghj");
    axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/${route.params.data}`)
      .then((response) => {
        setProduct(response.data[0]);
        console.log("products", product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>name: {product.name}</Text>
        <Text>description: {product.description}</Text>
        <Text>Picture: {product.picture}</Text>
        <Text>price: ${product.price}</Text>
      </View>
      <View style={styles.bottom}>
        <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
        <Button title="AddToCart" onPress={() => addToCart(product)} />
        <Button title="Cart" onPress={() => navigate("Cart")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 8,
    marginVertical: 10
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});
export default ProductsDetails;

