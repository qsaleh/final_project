import React from "react";
import { StyleSheet, View, YellowBox, Text } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
} from "react-native-table-component";
import { useGlobal } from '../lib/globals';
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 }
});
const Receipt = () => {
  const { cartItems } = useGlobal();
  console.log("cartItems in receipt.js", cartItems);
  const tableHead = [
    "Item",
    "quantity",
    "subtotal"
  ];
  const products = cartItems;
  console.log("product", products);
  const nestedData = products.map((product) => [
    product.productName,
    product.qty,
    product.subTotal
  ]);
  const total = products.reduce(function (tot, product) {
    return tot + product.subTotal;
  }, 0);
  console.log(total)
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={nestedData} textStyle={styles.text} />
      </Table>
      <View>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
}
export default Receipt;
//axios.get("api/orders")
//without htableHead
//Confirmation note
//add style to make it diiferent from Cart
// Button to continue scanning
//Button for logout