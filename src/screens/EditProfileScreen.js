import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getCity } from "../../features/search/cityIdSlice";
import { getHotels } from "../../features/search/searchSlice";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-date-picker";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputAll}>
        <View style={styles.input}>
        <View className="m-2 absolute z-10">
          <Icon style={styles.iconExtraStyle} name="search" size={25} color="#A1A1A1" />
        </View>

        <TextInput
          placeholder="Search destination"
          className="py-2 px-10 text-gray-900 text-base bg-white shadow-md shadow-gray-200 rounded-lg"
          onChangeText={(input) => setCityID(input)}
        />
        </View>

        <View
          style={styles.date}
          className="flex flex-row mt-4 justify-between"
        >
          <View style={styles.selfDate}>
            <View className="m-2 absolute z-10">
              <Icon style={styles.iconExtraStyle} name="date-range" size={25} color="#A1A1A1" />
            </View>
            <TextInput
              placeholder="yyyy-mm-dd"
              className="py-2 px-10 text-gray-900 text-base bg-white shadow-md shadow-gray-200 rounded-lg"
              onChangeText={(e) => setCheckin(e)}
            />
          </View>
          <View style={styles.selfDate}>
            <View className="m-2 absolute z-10">
              <Icon style={styles.iconExtraStyle} name="date-range" size={25} color="#A1A1A1" />
            </View>
            <TextInput
              placeholder="yyyy-mm-dd"
              className="py-2 px-10 text-gray-900 text-base bg-white shadow-md shadow-gray-200 rounded-lg"
              onChangeText={(e) => setCheckout(e)}
            />
          </View>
        </View>
        <View style={styles.input}>
          <View>
            <Icon style={styles.iconExtraStyle} name="date-range" size={25} color="#A1A1A1" />
          </View>
          <TextInput
            placeholder="guests"
            className="py-2 px-10 text-gray-900 text-base bg-white shadow-md shadow-gray-200 rounded-lg"
            onChangeText={(e) => setGuests(e)}
          />
        </View>
      </View>

      <View style={styles.buttonSearch}>
        <TouchableHighlight
          className="p-2 bg-blue-500 rounded-full flex flex-row justify-center py-3"
          underlayColor={"#2192FF"}
          onPress={handleSearch}
        >
          <Text style={styles.textSearch}>Search</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    justifyContent: "center", 
    alignContent: "center",
    padding: 20,
    borderRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  date: {
    display: "flex",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: 'center',
    // marginHorizontal: 3,
    // justif
  },
  selfDate: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8
  },
  iconExtraStyle: {
    paddingRight: 8
  },
  texttitle: {
    color: "rgb(0, 75, 141)",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 24,
    marginVertical: 10,
    textAlign: "left",
    alignItems: "flex-start",
    paddingHorizontal: 24,
  },
  input: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8
  },
  inputAll: {
    marginBottom: 16
  },
  buttonSearch: {
    width: 315,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 16
  },
  textSearch: {
    textAlign: "center",
    color: 'white'
  }
});
