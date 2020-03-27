import React from "react";
import Login from "./components/login";
import ProductDetails from "./components/products-details";
import QRScanner from "./components/qr-scanner";
import Cart from "./components/cart";
import Receipt from "./components/receipt";
import Payment from "./components/payment";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import { navigation } from "@react-navigation/stack";

export default function AppNavigator() {
  const Stack = createStackNavigator();
  const headerOptions = {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "tomato" }
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={headerOptions} />
      <Stack.Screen
        name="QRScanner"
        component={QRScanner}
        options={headerOptions}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductDetails}
        options={({  navigation: { navigate } }) => ({
          headerRight: () => (
            <Button onPress={() => navigate("Cart")} title="My Cart" />
          ),
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" }
        })}
      />
      <Stack.Screen name="Cart" component={Cart} options={headerOptions} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={headerOptions}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
}
