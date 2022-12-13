import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CityCard from '../components/cards/CityCard'
import DestinationCard from '../components/cards/DestinationsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../features/city/citySlice';
import { getDestinations } from '../features/city/destinationSlice';

export default function App() {
  const dispatch = useDispatch();
  const citiesData = useSelector((state) => state.cities.cities);
  const destinations = useSelector((state) => state.destination.destinations)

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.textDiah}>Halo Diahh, ini home page di Expo</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.texttitle}>Big Cities in Indonesia</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {citiesData.filter((data) => data.type == 'CITY').map(data => (
          <CityCard
            navigate={""}
              imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
              title={data.regionNames.primaryDisplayName}
              id={data.gaiaId}
            />
        ))}
      </ScrollView>

      <Text style={styles.texttitle}>Popular Destination</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
      {destinations.filter((data) => data.type == 'POI').map(data => (
          <DestinationCard
              // navigate={""}
            imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
            title={data.regionNames.primaryDisplayName}
            id={data.gaiaId}
            city={"Bali"}
            />
      ))}
      </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDiah: {
    color: 'rgb(0, 75, 141)',
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "left"
  },
  texttitle: {
    color: 'rgb(0, 75, 141)',
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
    textAlign: "left",
    alignItems: "flex-start"
  }
});
