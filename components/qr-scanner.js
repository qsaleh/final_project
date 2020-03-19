import React, { useState, useEffect, Component } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { navigation } from "@react-navigation/stack";

export default function App({ navigation: { navigate } }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    axios
      .get(`https://bugi-api.herokuapp.com/api/product-details`)
      .then((response) => {
        console.log("here");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("ProductsDetails");

    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
        flexDirection: "column",
        justifyContent: "flex-start"
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
        style={{
          height: "60%",
          width: "100%"
        }}
      />
      <TextInput
        style={{
          alignSelf: "center"
        }}
        placeholder="Enter barcode"
      />
      <Button
        style={{
          padding: 16,
          width: 200,
          borderRadius: 24,
          alignItems: "center"
        }}
        title="submit"
        onPress={() => navigate("ProductsDetails")}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
