import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { route, navigation } from "@react-navigation/stack";
import ButtonWithBackground from "../components/ButtonWithBackground";
import axios from "axios";
import { useGlobal } from "../lib/globals";

const ProductsDetails = ({ route, navigation: { navigate } }) => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useGlobal();

  console.log("route.params.data", route.params.data);
  const stringToSearch = `%${route.params.data.slice(3, 9)}%`;
  console.log("stringToSearch", stringToSearch);

  useEffect(() => {
    console.log(route.params.data, "gdfhghjjlhkgjfhgjkl;kjhghj");
    axios
      .get(
        `https://bugi-api.herokuapp.com/api/product-details/${route.params.data}`
      )
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
        <Image
          style={styles.img}
          source={{ uri: product.picture }}
        />
        <Text>price: ${product.price}</Text>
      </View>
      <View style={styles.bottom}>
        <ButtonWithBackground
          text="Continue shopping"
          color="#2C7873"
          onPress={() => navigate("QRScanner")}
        />
        <View style={styles.bottom}>
          <ButtonWithBackground
            text="AddToCart"
            color="#2C7873"
            onPress={() => addToCart(product)}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 20
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 150,
    height: 150,
    // resizeMode: "stretch"
  }
});
export default ProductsDetails;
