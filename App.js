import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CityCard from './src/components/cards/CityCard';
import DestinationCard from './src/components/cards/DestinationsCard';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image 
        style={{width: 55, height: 55, marginBottom: 10}}
        source={require('./assets/favicon.png')} />
      <Text style={styles.textDiah}>Halo Diahh, ini home page di Expo</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
    </View>
    </ScrollView>
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
