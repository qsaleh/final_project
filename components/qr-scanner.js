import React, { useState, useEffect, Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ButtonWithBackground from "../components/ButtonWithBackground";
import { navigation } from "@react-navigation/stack";
import axios from 'axios';

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
    console.log(type, data, "test herehhhhhhh")
    setScanned(true);
    // axios
    //   .post(`https://bugi-api.herokuapp.com/api/product-details/:${data}`)
    //   .then((response) => {
    //     console.log("here");
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    navigate("ProductsDetails", { data });

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
          alignSelf: 'center',
          height: 60,
        }}
        placeholder="Enter barcode"
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <ButtonWithBackground
        text="submit"
        color="#2C7873"
        onPress={() => navigate("ProductsDetails", {data})}
        style={{
          alignSelf: 'center',
          marginTop: 30
        }}
      />  
    </View>
  );
}