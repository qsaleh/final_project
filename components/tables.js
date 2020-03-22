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
      selectedProducts: [1, 3, 4],
      tableHead: ["Items", "UPC", "Recyclable"]
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
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={this.state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {this.state.selectedProducts.map((item, i) => {
            return (
              <View>
                <Button title="+" onPress={() => this.IncrementItem(i)} />
                <Button title="-" onPress={() => this.DecreaseItem(i)} />
                <Row data={item} key={i} textStyle={styles.text} />
              </View>
            );
          })}
        </Table>
      </View>
    );
  }
}
export default Tables;
