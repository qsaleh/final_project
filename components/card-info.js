import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import ButtonWithBackground from "./ButtonWithBackground";
import Stripe from 'react-native-stripe-api';

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
  confirmPayment() {
    const apiKey = 'pk_test_Jxd3WCtPiiGGGQORl0AxKkN500Ta61gIx2';
    const client = new Stripe(apiKey);
    client.createToken(
      '4242424242424242',
      '09',
      '18',
      '111'
    )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
  render() {
    return (
      <View >
        <TextInput
          label='credit card number'
          placeholder={""}
          value={'4242424242424242'}
          onChangeText={(number) => this.setState({ number })}
        />
        <TextInput
          label='exp month'
          placeholder={""}
          value={'09'}
          onChangeText={(expMonth) => this.setState({ expMonth })}
        />
        <TextInput
          label='exp year'
          placeholder={""}
          value={'18'}
          onChangeText={(expYear) => this.setState({ expYear })}
        />
        <TextInput
          label='cvc'
          placeholder={""}
          value={'111'}
          onChangeText={(cvc) => this.setState({ cvc })}
        />
        <ButtonWithBackground
          text="confirm payment"
          color="#2C7873"
          onPress={this.confirmPayment.bind(this)}
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
