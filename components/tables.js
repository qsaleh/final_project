import React, { Component } from "react";
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 250, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 }
});

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      tableHead: [
        "quantity",
        "product_id",
        "order_id"
      ]
    };
  }
  componentDidMount() {
    axios
      .get(`https://bugi-api.herokuapp.com/api/orders`)

      .then((data) => {
        const products = data.data;
        this.setState((state) => ({ selectedProducts: [...state.selectedProducts, ...products] }));

      })
      .catch((err) => {
        console.log(" catch here ", err);
      });
  }
  IncrementItem = () => {
    this.setState(state => {
      const addItem = state.selectedProducts.map((product) => ({
        quantity: product.quantity + 1,
        product_id: product.product_id,
        order_id: product.order_id
      }));
      return {
        ...this.state,
        selectedProducts: addItem
      }
    });

  };
  DecreaseItem = () => {
    this.setState(state => {
      const removeItem = state.selectedProducts.map((product) => ({
        quantity: product.quantity - 1,
        product_id: product.product_id,
        order_id: product.order_id
      }));
      return {
        ...this.state,
        selectedProducts: removeItem
      };
    });
  };

  render() {
    const products = this.state.selectedProducts;

    const nestedData = products.map((product) => [
      product.quantity,
      product.product_id,
      product.order_id,

    ]);

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={nestedData} textStyle={styles.text} />
          <Button title="+" onPress={this.IncrementItem} />
          <Button title="-" onPress={this.DecreaseItem} />
        </Table>
      </View>
    );
  }
}
export default Tables;