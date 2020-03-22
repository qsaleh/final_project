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
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 }
});

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedProducts: [],
      tableHead: [
        "Items",
        "Picture",
        "UPC",
        "Price",
        "Recyclable",
        "Compostable"
      ]
    };
    console.log("props", props)
  }
  IncrementItem = (index) => {
    this.setState(state => {
      const addItem = state.selectedProducts.map((item, i) => {
        if (i === index) {
          return item + 1;
        }
        return item;
      });
      return {
        ...this.state,
        selectedProducts: addItem
      }
    });

  };
  DecreaseItem = (index) => {
    this.setState(state => {
      const removeItem = state.selectedProducts.map(item => {
        if (index === 1) {
          return item - 1
        }
        return item;
      });
      return {
        ...this.state,
        selectedProducts: removeItem
      };
    });
  };
  componentDidMount() {
    axios
      .get(`https://bugi-api.herokuapp.com/api/orders`)

      .then((data) => {
        console.log(data)
        const products = data.data.map((item) => Object.values(item));
        this.setState((state) => ({ selectedProducts: [...state.selectedProducts, ...products] }));

      })
      .catch((err) => {
        console.log(" catch here ", err);
      });
  }
  render() {
    const products = this.props.selectedProducts;

    const nestedData = products.map((product) => [
      product.name,
      product.picture,
      product.upc,
      product.price,
      String(product.recyclable),
      String(product.compostable)
    ]);
    console.log(nestedData, "this is Life");

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />

          <Rows data={nestedData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}
export default Tables;
