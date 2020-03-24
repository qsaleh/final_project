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
      selectedProducts: [...this.props.selectedProducts],
      tableHead: [
        "Item",
        "quantity",
        "unit price",
        "subtotal"
      ]
    };
  }
  componentDidMount() {
    // const selectedProducts = props.selectedProducts.map((item) => Object.values(item));

    // console.log("selectedProducts in tables.js", selectedProducts);
  

    // axios
    //   .get(`https://bugi-api.herokuapp.com/api/orders`)

    //   .then((data) => {
    //     // console.log("dataaaaaa", data);

    //     const selectedProducts = data.data.map((item) => Object.values(item));

    //     console.log("selectedProducts in tables.js", selectedProducts);
    //     this.setState({ selectedProducts: selectedProducts });
    //     // this.setState((prevState) => ({
    //     //   ...prevState,
    //     //   selectedProducts: [...prevState.selectedProducts, ...selectedProducts]
    //     // }));
    //   })
    //   .catch((err) => {
    //     console.log(" catch here ", err);
    //   });
  }
  IncrementItem = () => {
   
    this.setState(state => {
      console.log("state.selectedProducts", state.selectedProducts)
      const addItem = state.selectedProducts.map((product) => ({
        productName: product.productName,
        qty: product.qty + 1,
        subTotal: product.subTotal,
        unitPrice: product.unitPrice,
        upc: product.upc
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
        productName: product.productName,
        qty: product.qty + 1,
        subTotal: product.subTotal,
        unitPrice: product.unitPrice,
        upc: product.upc
      }));
      return {
        ...this.state,
        selectedProducts: removeItem
      };
    });
  };
  

  render() {
    const products = this.props.selectedProducts;
   
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