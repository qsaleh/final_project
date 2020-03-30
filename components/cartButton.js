import React, { Componet } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const CartButton = (props) => {
  const content = (
    <View >
      style={styles.cart}
      source={require("../assets/shopping-cart-xxl.png")}
    </View>
  );

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
cart:{
  width: 10,
  height: 10
}
});

export default CartButton;
