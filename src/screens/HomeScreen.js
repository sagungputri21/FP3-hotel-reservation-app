import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CityCard from '../components/cards/CityCard'
import DestinationCard from '../components/cards/DestinationsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../features/city/citySlice';

export default function App() {
  const dispatch = useDispatch();
  const citiesData = useSelector((state) => state.cities.cities);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);
  console.log('data=> ', citiesData)

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.textDiah}>Halo Diahh, ini home page di Expo</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.texttitle}>Big Cities in Indonesia</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
      <CityCard
        navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Bali'}
        id={1}
      />
      <CityCard
        navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Bali'}
        id={1}
      />
      <CityCard
        navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Bali'}
        id={1}
      />
      <CityCard
        navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Bali'}
        id={1}
      />
      </ScrollView>

      <Text style={styles.texttitle}>Popular Destination</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
      <DestinationCard
        // navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Nusa Dua Beach'}
        id={1}
        city={"Bali"}
      />
      <DestinationCard
        // navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Nusa Dua Beach'}
        id={1}
        city={"Bali"}
      />
      <DestinationCard
        // navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Nusa Dua Beach'}
        id={1}
        city={"Bali"}
      />
      <DestinationCard
        // navigate={""}
        imageLink={"https://i.pinimg.com/750x/19/5f/6e/195f6ea6b7c43632e8e3abd0ed20bb25.jpg"}
        title={'Nusa Dua Beach'}
        id={1}
        city={"Bali"}
      />
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
