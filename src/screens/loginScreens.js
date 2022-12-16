import React, { useState }  from "react";
import { View, Image, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';

import Login from "../components/login/login";
import CustomButton from "../components/button/customButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/useSlice";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { selectPage } from "../features/pageSlice";
import { selectUser } from "../features/useSlice";

const LoginScreens = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const page = useSelector(selectPage)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    

    const onLoginPressed = (e) => {
        if(e && e.preventDefault) { e.preventDefault()}

        if(email==="john@gmail.com" && password==="john123") {
            dispatch(
                login({
                    loggedIn: true
            }))
            alert("berhasil login"); 
            console.log("nilai page",page)
            if(page!==false) {
                navigation.navigate('DetailPage')
            } else {
                navigation.navigate('Home')
            }
        
        }     
        
    }

    console.log("ini user", user)

    useEffect(() => {
        onLoginPressed()   
    },[])

    return(
        <View style={styles.container}>
            <Image 
                style={{width: 400, height: 100, marginBottom: 1}}
                source={require('./icon-hotel.png')} />
            <StatusBar style="auto" />

            <Login 
                placeholder="Email" 
                value={email} 
                setValue={setEmail} 
                secureTextEntry={false}
            />
            <Login 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />
            
            <CustomButton text="Login" onPress={(e) => onLoginPressed(e)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
    
});

export default LoginScreens