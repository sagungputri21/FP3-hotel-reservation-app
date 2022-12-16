import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import CityCard from '../components/cards/CityCard'
import DestinationCard from '../components/cards/DestinationsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../features/city/citySlice';
import { getDestinations } from '../features/city/destinationSlice';
import { bigCities, destinations } from '../data/homeCityData';
import Search from '../components/form/SearchForm';

export default function App() {
  // const citiesData = useSelector((state) => state.cities.cities);
  // const destinations = useSelector((state) => state.destination.destinations)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.textHeading}>
      <Text style={styles.textContent}>Find your</Text>
      <Text style={styles.textContent}>dream vacation here...</Text>
      </View>
      <View>
        <Search />
      </View>
      <Text style={styles.texttitle}>Big Cities in Indonesia</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {/* {citiesData.filter((data) => data.type == 'CITY').map(data => (
          <CityCard
            navigate={""}
              // imageLink=""
              title={data.regionNames.primaryDisplayName}
              id={data.gaiaId}
            />
        ))} */}
        {bigCities.map(data => (
          <CityCard
            imageLink={data.image}
            title={data.city}
          />
        ))}
      </ScrollView>

      <Text style={styles.texttitle}>Popular Destination in Bali</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {destinations.map((data) => (
          <DestinationCard
            imageLink={data.uri}
            title={data.city}
            city={data.place}
            />
        ))}
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeading: {
    marginVertical: 20,
    textAlign: "left",
    paddingHorizontal: 24
  },
  textContent: {
    color: 'rgb(0, 75, 141)',
    fontWeight: "bold",
    fontSize: 18,
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
