import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const screenWidth = Dimensions.get("screen").width;

const LandingScreen = () => {
  const [location, setLocation] = useState<Location.LocationGeocodedAddress>();
  const [errorMsg, setErrorMsg] = useState("");
  const [displayAddress, setDisplayAddress] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { coords } = location;
      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: Location.LocationGeocodedAddress[] =
          await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          });
        for (let item of addressResponse) {
          setLocation(item);
          let currAddress = "";
          if (item.name) {
            currAddress += item.name + ", ";
          }
          if (item.street) {
            currAddress += item.street + ", ";
          }
          if (item.city) {
            currAddress += item.city + ", ";
          }
          if (item.postalCode) {
            currAddress += item.postalCode;
          }
          setDisplayAddress(currAddress);
        }
      }
    })();
  }, []);

  console.log(location);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your delivery address here</Text>
        </View>
        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
    backgroundColor: "#d35400",
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7d7d7d",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "300",
    color: "gray",
  },
  footer: {
    flex: 1,
    backgroundColor: "cyan",
  },
});
