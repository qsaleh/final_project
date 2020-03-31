import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';

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
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label='credit card number'
          placeholder={""}
          onChangeText={(number) => this.setState({ number })}
          value={'4242424242424242'}
        />
        <TextInput
          style={styles.input}
          label='exp month'
          placeholder={""}
          onChangeText={(exp_month) => this.setState({ exp_month })}
          value={'09'}
        />
        <TextInput
          style={styles.input}
          label='exp year'
          placeholder={""}
          onChangeText={(exp_year) => this.setState({ exp_year })}
          value={'22'}
        />
        <TextInput
          style={styles.input}
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
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#fff"
  }
});

export default Card;
