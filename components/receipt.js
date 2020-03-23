import React, { Component } from "react";
import { StyleSheet, View, YellowBox } from "react-native";
import ButtonWithBackground from "../components/ButtonWithBackground";

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

class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      tableHead: ["Total Price", "$Total", "500$"]

    };
  }

  componentDidMount() {
    axios
      .get(`https://bugi-api.herokuapp.com/api/orders`)

      .then((data) => {
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
    const product = this.state.selectedProducts;
    console.log("product", product);

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />

          {product.map((item, i) => {
            return <Row data={item} key={i} textStyle={styles.text} />;
          })}
        </Table>
      </View>
    );
  }
}

export default Receipt;

//axios.get("api/orders")
//without htableHead
//Confirmation note
//add style to make it diiferent from Cart
// Button to continue scanning
//Button for logout
