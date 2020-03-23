import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks:0,
      show:true
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  render() {
    return (
      <View>
        <Button title="+" onPress={() => this.IncrementItem} />
        <Button title="-" onPress={() => this.DecreaseItem} />
      </View>
    );
  }
}
export default Quantity;