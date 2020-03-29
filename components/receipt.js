import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useGlobal } from '../lib/globals';

const Receipt = () => {
  const { cartItems } = useGlobal();
  const tableHead = [
    "Item",
    "quantity",
    "subtotal"
  ];
  const products = cartItems;
  const nestedData = products.map((product) => [
    product.productName,
    product.qty,
    product.subTotal
  ]);
  const total = products.reduce(function (tot, product) {
    return tot + product.subTotal;
  }, 0);
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
      <View style={styles.total}>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
}
export default Receipt;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  total: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }
});