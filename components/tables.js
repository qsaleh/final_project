import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useGlobal } from '../lib/globals';

const Tables = () => {
  const { cartItems, DecreaseItem, IncrementItem } = useGlobal();
  const tableHead = [
    "Item",
    "quantity",
    "qty +/-",
    "price",
    "subtotal"
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.tableView, { backgroundColor: "red" }]}>
        {tableHead.map((headData) => (
          <View key={headData} textStyle={styles.text} style={styles.row}>
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
            <Button title="+" onPress={() => IncrementItem(product)} />
            <Button title="-" onPress={() => DecreaseItem(product)} />
          </View>
          <View textStyle={styles.text} style={styles.row}>
            <Text>{product.unitPrice}</Text>
          </View>
          <View textStyle={styles.text} style={styles.row}>
            <Text>{product.subTotal}</Text>
          </View>
        </View>
      ))
      }
    </View>
  );
}
export default Tables;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  text: { margin: 6, justifyContent: "center", alignItems: "center" },
  tableView: { flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around', borderWidth: 1 },
  row: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
