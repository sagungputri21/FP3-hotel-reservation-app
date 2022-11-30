import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

const CityCard = ({id, title, imageLink, navigate}) => {

  // const goDetail= () => {
  //   navigate("CityDetail", {id: id})
  // }
  // onPressIn={goDetail}

  return (
    <TouchableHighlight underlayColor="#1A1D27">
      <View style={styles.container}>
        <View style={styles.overlayView}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.overlayViewDarken}/>
        <TouchableHighlight>
          <Image
            source={{ uri: imageLink }}
            style={styles.image}
          />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 150,
    maxHeight: 150,
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
    width: 200,
    height: 150,
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
  },
  overlayViewDarken : {
    position: "absolute",
    zIndex: 40,
    width: 200,
    height: 35,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor : "rgba(0,0,0,0.3)",
    alignItems: "flex-end",
    bottom: 0
  }
});

export default CityCard;