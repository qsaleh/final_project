import React, { Component } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
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
  }

  componentDidMount() {
    axios
      .get(`https://bugi-api.herokuapp.com/api/orders`)

      .then((data) => {
        console.log("dataaaaaa", data);

        const selectedProducts = data.data.map((item) => Object.values(item));

        console.log(selectedProducts);
        this.setState({ selectedProducts: selectedProducts });
        this.setState((prevState) => ({
          ...prevState,
          selectedProducts: [...prevState.selectedProducts, ...selectedProducts]
        }));
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
