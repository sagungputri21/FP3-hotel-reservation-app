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
import UserProfileCard from "../components/cards/UserProfileCard";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <UserProfileCard />
        </View>
        <View>
          <Text>Result : {`${booking.length}`} items</Text>
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

export default ProfilePage;
