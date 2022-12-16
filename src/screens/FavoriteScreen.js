import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableHiglight,
  ScrollView,
} from "react-native";
import SaveCard from "../components/cards/SaveCard";

const FavoritePage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Your Favorites Hotels</Text>
          <Text>Result : {`${wishlist.length}`} items</Text>
        </View>
        <TouchableHiglight>
          <View>
            <SaveCard
              id={id}
              name={name}
              image={image}
              guests={guests}
              star={star}
              navigate={() => navigation.navigate("Hotel Detail", { id: id })}
            />
          </View>
        </TouchableHiglight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoritePage;
