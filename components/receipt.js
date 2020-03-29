import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useGlobal } from '../lib/globals';

const Receipt = () => {
  const { cartItems } = useGlobal();
  const tableHead = [
    "Item",
    "quantity",
    "subtotal"
  ];
  const total = cartItems.reduce(function (tot, product) {
    return tot + product.subTotal;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={[styles.tableView, { backgroundColor: "red" }]}>
        {tableHead.map((headData, index) => (
          <View key={index} textStyle={styles.text} style={styles.row}>
            <Text>{headData}</Text>
          </View>
        ))
        }
      </View>
      {cartItems.map((product, index) => (
        <View key={index} style={styles.tableView}>
          <View textStyle={styles.text} style={styles.row}>
            <Text>{product.productName}</Text>
          </View>
          <View textStyle={styles.text} style={styles.row}>
            <Text>{product.qty}</Text>
          </View>
          <View textStyle={styles.text} style={styles.row}>
            <Text>{product.subTotal}</Text>
          </View>
        </View>
      ))
      }
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
  total: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  tableView: { flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around', borderWidth: 1 },
  row: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});