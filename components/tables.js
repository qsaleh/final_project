import React from "react";

import { StyleSheet, View, YellowBox, Button } from "react-native";
import {
  Table,
  TableWrapper,
  Text,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import axios from "axios";
import { useGlobal } from '../lib/globals';
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 }
});

const Tables = () => {
  const { cartItems, DecreaseItem, IncrementItem } = useGlobal();
  const tableHead = [
    "Item",
    "quantity",
    "unit price",
    "subtotal"
  ];
  const products = cartItems;
  const nestedData = products.map((product) => [
    product.productName,
    product.qty,
    product.unitPrice,
    product.subTotal
  ]);
  console.log("nestedData in tables.js", nestedData);

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={nestedData} textStyle={styles.text} />
        <Button title="+" onPress={() => IncrementItem(cartItems)} />
        <Button title="-" onPress={() => DecreaseItem(cartItems)} />
      </Table>
    </View>
  );
}
export default Tables;