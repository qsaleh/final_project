import React from 'react';
import Login from './components/login'
import ProductDetails from './components/products-details';
import QRScanner from './components/qr-scanner';
import Cart from './components/cart';
import Receipt from './components/receipt'
import Payment from './components/payment'
import { createStackNavigator } from '@react-navigation/stack';

export default function AppNavigator() {
  const Stack = createStackNavigator();

  const headerOptions = {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'tomato' },
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
      <Stack.Screen name="ProductsDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Receipt" component={Receipt} />
    </Stack.Navigator>
  );
}
