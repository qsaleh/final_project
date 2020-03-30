import React, { useState, useEffect, Component } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import ButtonWithBackground from "../components/ButtonWithBackground";
import { navigation } from "@react-navigation/stack";
import axios from "axios";

export default function QRScanner({ navigation: { navigate } }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // setScanned(true);

    navigate("ProductsDetails", { data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        margin: 5
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          height: "60%",
          width: "100%"
        }}
      />
      <TextInput
        style={{
          alignSelf: "center",
          height: 40,
          margin: 10
        }}
        placeholder="Enter barcode"
      />
      {scanned &&
        ((
          <View
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "",
              margin: 5
            }}
          />
        ),
        (
          <ButtonWithBackground
            text={"Tap to Scan Again"}
            color="#2C7873"
            // onPress={() => setScanned(false)}
          />
        ))}
      <View
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          margin: 5
        }}
      />  
    </View>
  );
}
