import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

const HotelCard = ({ id, name, image, navigate, guest, star }) => {
  return (
    <TouchableHighlight underlayColor="#1A1D27" onPressIn={navigate}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.iconSave}>
            <TouchableHighlight onPress={() => ""}>
              <View>
                <Icon
                  name="favorite"
                  size={20}
                  // color={
                  //   favorites?.find(
                  //     favorite => fav?.id === id
                  //   ) ? '#E0144C' : '#D6E4E5'
                  // }
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.title}>{name}</Text>
            <View>
              <Text>
                <Icon />
                {star}
              </Text>
              <Text>{guest} guests</Text>
            </View>
          </View>
          <View>
            <Text>{price}</Text>
            <Text>/night</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 200,
    height: 150,
    maxHeight: 150,
    position: "relative",
    borderRadius: 6,
    overflow: "hidden",
    marginLeft: 10,
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
  overlayViewDarken: {
    position: "absolute",
    zIndex: 40,
    width: 200,
    height: 35,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "flex-end",
    bottom: 0,
  },
});