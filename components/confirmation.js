import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { PaymentCardTextField } from 'tipsi-stripe'
import { StyleSheet, Text, View, Button } from "react-native";
const styles = StyleSheet.create({
  field: {
    width: 300,
    color: '#449aeb',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  }
})

class FieldExample extends Component {
  handleFieldParamsChange = (valid, params) => {
    console.log(`
      Valid: ${valid}
      Number: ${params.number || '-'}
      Month: ${params.expMonth || '-'}
      Year: ${params.expYear || '-'}
      CVC: ${params.cvc || '-'}
    `)
  }

  isPaymentCardTextFieldFocused = () => this.paymentCardInput.isFocused()

  focusPaymentCardTextField = () => this.paymentCardInput.focus()

  blurPaymentCardTextField = () => this.paymentCardInput.blur()

  resetPaymentCardTextField = () => this.paymentCardInput.setParams({})

  render() {
    return (
      <View>
        <PaymentCardTextField
          ref={ (ref) => {
              this.paymentCardInput = ref;
          }}
          style={styles.field}
          cursorColor={'#449aeb'}
          textErrorColor={'black'}
          placeholderColor={'yellow'}
          numberPlaceholder={'orange'}
          expirationPlaceholder={'green'}
          cvcPlaceholder={'blue'}
          disabled={false}
          onParamsChange={this.handleFieldParamsChange}
        />
        <Button
          title="confirm"
          onPress={
            () => navigate('Cart')}/>
      </View>
    )
  }
}