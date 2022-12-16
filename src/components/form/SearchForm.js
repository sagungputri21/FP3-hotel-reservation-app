import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { getCity } from '../../features/search/cityIdSlice';
import { getHotels } from '../../features/search/searchSlice';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';

const Search = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getCityId = useSelector(state => state.city.cityID);

  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());

  const [openCheckin, setOpenCheckin] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);

  const [cityID, setCityID] = useState('');

  const formatDateCheckin = () => {
    const date = new Date(checkin);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const formatDateCheckout = () => {
    const date = new Date(checkout);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const handleSearch = () => {
    dispatch(getCity(cityID));
    dispatch(getHotels(getCityId));

    navigation.navigate('Search Results');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="m-3">
        <View className="m-2 absolute z-10">
          <Icon name="search" size={25} color="#A1A1A1" />
        </View>

        <TextInput
          placeholder="Where do you want to go?"
          className="py-2 px-10 text-gray-900 text-base bg-white shadow-md shadow-gray-200 rounded-lg"
          onChangeText={input => setCityID(input)}
        />

        <View style={styles.date} className="flex flex-row mt-4 justify-between">
          <View className="bg-white p-2 rounded-md">
            <TouchableOpacity
              className="flex flex-row items-center"
              onPress={() => setOpenCheckin(true)}>
              <Icon name="date-range" size={25} color="#A1A1A1" />
              <Text className="text-gray-900 text-base ml-2">
                {formatDateCheckin()}
              </Text>
            </TouchableOpacity>

            <DatePicker
              modal
              mode="date"
              open={openCheckin}
              date={checkin}
              onConfirm={date => {
                setOpenCheckin(false);
                setCheckin(date);
              }}
              onCancel={() => {
                setOpenCheckin(false);
              }}
            />
          </View>

          <View className="bg-white p-2 rounded-md">
            <TouchableOpacity
              className="flex flex-row items-center"
              onPress={() => setOpenCheckout(true)}>
              <Icon name="date-range" size={25} color="#A1A1A1" />
              <Text className="text-gray-900 text-base ml-2">
                {formatDateCheckout()}
              </Text>
            </TouchableOpacity>

            <DatePicker
              modal
              mode="date"
              open={openCheckout}
              date={checkout}
              onConfirm={date => {
                setOpenCheckout(false);
                setCheckout(date);
              }}
              onCancel={() => {
                setOpenCheckout(false);
              }}
            />
          </View>
        </View>
      </View>

      <View className="my-4 mx-2">
        <TouchableHighlight
          className="p-2 bg-blue-500 rounded-full flex flex-row justify-center py-3"
          underlayColor={'#2192FF'}
          onPress={handleSearch}>
          <Text className="text-white text-base font-medium">Search</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

export default Search;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    date: {
      color: 'rgb(0, 75, 141)',
      display: 'flex',
      marginTop: 5,
      
    },
    texttitle: {
      color: 'rgb(0, 75, 141)',
      fontWeight: "bold",
      fontSize: 18,
      paddingTop: 24,
      marginVertical: 10,
      textAlign: "left",
      alignItems: "flex-start",
      paddingHorizontal: 24
    }
  });
  