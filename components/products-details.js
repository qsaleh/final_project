import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import axios from "axios";

export const ProductsDetails = ({route, navigation: { navigate } }) => {
const [product, setProduct] = useState(null);
     axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/${route.params.data}`)
      .then((response) => {
        // console.log('response.data', response.data);
        setProduct(response.data);
        // dispatch('UPDATE_CART', response.data)

        /**
         * switch(action.type) {
         *  case 'UPDATE_CART':
         *    return {
         *      ...state,
         *       cart: [...state.cart, action.payload]
         *     }
         * }
         */
      })
      .catch((error) => {
        console.log(error);
      });
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
      <Button title="Cart" onPress={() => navigate("Cart", {product})} />
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
