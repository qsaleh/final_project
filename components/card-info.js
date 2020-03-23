import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import ButtonWithBackground from "./ButtonWithBackground";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      exp_month: "",
      exp_year: "",
      cvc: ""
    };

  }
  render() {
    return (
      <View >
        <TextInput
          label='credit card number'
          placeholder={""}
          onChangeText={(number) => this.setState({ number })}
          value={'4242424242424242'}
        />
        <TextInput
          label='exp month'
          placeholder={""}
          onChangeText={(exp_month) => this.setState({ exp_month })}
          value={'09'}
        />
        <TextInput
          label='exp year'
          placeholder={""}
          onChangeText={(exp_year) => this.setState({ exp_year })}
          value={'22'}
        />
        <TextInput
          label='cvc'
          placeholder={""}
          onChangeText={(cvc) => this.setState({ cvc })}
          value={'111'}
        />

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Card;
