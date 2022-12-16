import React from "react";
import Form from "../components/form/form";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import CustomButton from "../components/button/customButton";
import { useEffect } from "react";

const BookingScreen = ({navigation}) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [count, setCount] = useState()

    // localStorage.setItem("bookingItem", JSON.stringify(hotelItem));

    const handleTotalPrice = () => {
        const priceHotel = (localStorage.getItem('price'))
        console.log("ini price di booking",priceHotel)
        const split = priceHotel.split('$')
        const totalPrice = (parseInt(split[1]) *2)
        setCount(totalPrice) 
        
    }
    console.log("ini total price",count)

    useEffect(() => {
        handleTotalPrice()   
    },[])


    return(
        <View style={styles.container}>
            <Text>CONTACT INFORMATION</Text>
            <Form 
                placeholder="Contact Name" 
                value= {name}
                setValue={setName}
                secureTextEntry={false}
            />
            <Form 
                placeholder="Contact Email" 
                value= {email}
                setValue={setEmail}
                secureTextEntry={false}
            />
            <Form 
                placeholder="Phone Number" 
                value= {phoneNumber}
                setValue={setPhoneNumber}
                secureTextEntry={false}
            />
            <Text>PRICE SUMMARY</Text>
            <Text>For 2 days: ${count}</Text>
            <CustomButton text="Continue" onPress={() =>navigation.navigate('Home')}/>
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

export default BookingScreen