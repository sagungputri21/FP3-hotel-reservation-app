import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState} from 'react';


import LoginScreen from './src/screens/loginScreens';
import CustomButton from './src/components/button/customButton';

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const onLoginPressed = () => {
    console.warn('Login')
  }

  return (
    <View style={styles.container}>
      <Image 
        style={{width: 400, height: 100, marginBottom: 1}}
        source={require('./assets/icon-hotel.png')} />
      <StatusBar style="auto" />
    
      <LoginScreen 
      placeholder="Email" 
      value={email} 
      setValue={setEmail} 
      secureTextEntry={false}
      />
      <LoginScreen 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      />
      
      <CustomButton text="Login" onPress={onLoginPressed} />
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
    fontSize: 25,
    marginVertical: 10
  }
});
