// require('dotenv').config();
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import stripe from 'tipsi-stripe';
stripe.setOptions({
  publishableKey: 'pk_test_Jxd3WCtPiiGGGQORl0AxKkN500Ta61gIx2'
})

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}