import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import axios from "axios";

const ProductsDetails = ({ route, navigation: { navigate } }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bugi-api.herokuapp.com/api/product-details/667888093731`)
      .then((response) => {
        // console.log('response.data', response.data);
        setProducts(response.data);
        // dispatch('UPDATE_CART', response.data)

        /**
         * switch(action.type) {
         *  case 'UPDATE_CART':
         *    return {
         *      ...state,
         *       cart: [...state.cart, action.payload];
         *
         *      default:
         * throw new Error();
         *     }
         * }
         */
        //render(component)
        //pass state to Cart
        //pass (params) to be onPress
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
      <Button title="Continue shopping" onPress={() => navigate("QRScanner")} />
      {/* pass (params) onPress */}
      <Button title="Cart" onPress={() => navigate("Cart", { products })} />
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