import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

const DestinationCard = ({id, title, imageLink, city}) => {

  return (
    <TouchableHighlight underlayColor="#1A1D27" >
      <View style={styles.container}>
        <TouchableHighlight>
          <Image
            source={imageLink}
            style={styles.image}
          />
        </TouchableHighlight>
        <View style={styles.overlayView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.city}>{city}</Text>
        </View>
        <View style={styles.overlayViewDarken}/>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 275,
    height: 235,
    maxHeight: 215,
    position: "relative",
    borderRadius : 6,
    overflow : "hidden",
    marginLeft : 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlayView: {
    position: "absolute",
    zIndex: 50,
    width: 275,
    height: 215,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 8,
    paddingTop: 1
  },
  city: {
    fontSize: 12,
    fontWeight: "regular",
    color: "white",
    paddingHorizontal: 8,
  },
  overlayViewDarken : {
    position: "absolute",
    zIndex: 40,
    width: 275,
    height: 60,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor : "rgba(0,0,0,0.5)",
    alignItems: "flex-end",
    bottom: 0
  }
});

export default DestinationCard;