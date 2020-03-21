import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import ButtonWithBackground from "./ButtonWithBackground";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      expMonth: "",
      expYear: "",
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
        />
        <TextInput
          label='exp month'
          placeholder={""}
          onChangeText={(expMonth) => this.setState({ expMonth })}
        />
        <TextInput
          label='exp year'
          placeholder={""}
          onChangeText={(expYear) => this.setState({ expYear })}
        />
        <TextInput
          label='cvc'
          placeholder={""}
          onChangeText={(cvc) => this.setState({ cvc })}
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
