import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Icon from "react-native-vector-icons/MaterialIcons";
import Search from "../components/form/SearchForm";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableHiglight,
  ScrollView,
} from "react-native";
import HotelCard from "../components/cards/HotelCard";

const SearchScreen = ({ route, navigation }) => {
  const { checkin, checkout } = route.params;
  const hotels = useSelector((state) => state.hotels);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* //test */}
        <Text>checkin : {JSON.stringify(checkin)}</Text>
        <Text>haiii</Text>
        {/* <FlatList
                }
              >
              </FlatList> */}
        <View>
          <Search />
        </View>
        <View>
          {hotels.map((data) => (
            <HotelCard
              id={data.id}
              name={data.name}
              image={data.propertyImage.image.url}
              star={data.star}
              guests={data.availability.minRoomLeft}
              navigate={navigation.navigate("Hotel Detail", {
                id: id,
                checkin,
                checkout,
                guests,
              })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
