import React from "react";
import { Text, View } from "react-native";

const HotelDetailScreen = ({route, navigation }) => {
    const { checkin, checkout, guests } = route.params;

    return (
      <View>
        <Text>checkin : {JSON.stringify(checkin)}</Text>
        <Text>checkiut : {JSON.stringify(checkout)}</Text>
        <Text>guests : {JSON.stringify(guests)}</Text>
      </View>
    )
}

export default HotelDetailScreen;