import React from 'react';
import ProductDetails from './components/products-details';
import QRScanner from './components/qr-scanner';
import Cart from './components/cart';
import { createStackNavigator } from '@react-navigation/stack';

export default function AppNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="QRScanner" component={QRScanner} />
      <Stack.Screen name="ProductsDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />

    </Stack.Navigator>
  );
}