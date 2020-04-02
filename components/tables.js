import React from "react";

import { StyleSheet, View, Button, ScrollView } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { useGlobal } from "../lib/globals";
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, justifyContent: "center", alignItems: "center" }
});

const Tables = () => {
  const { cartItems, DecreaseItem, IncrementItem, RemoveItem } = useGlobal();
  const tableHead = [
    "Item",
    "quantity",
    "qty +/-",
    "price",
    "subtotal"
  ];
  const products = cartItems;
  const nestedData = products.map((product) => [
    product.productName,
    product.qty,
    <View>
      <Button title="+" onPress={() => IncrementItem(product)} />
      <Button title="-" onPress={() => DecreaseItem(product)} />
      <Button title="x" onPress={() => RemoveItem(product)} style={{ color: "red" }} />
    </View>,
    product.unitPrice,
    product.subTotal
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={nestedData} textStyle={styles.text} />
        </Table>
      </ScrollView>
    </View>
  );
};
export default Tables;