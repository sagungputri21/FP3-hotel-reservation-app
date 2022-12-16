import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import COLORS from "../color/color";

const CustomButton = ({onPress, text}) => {
    return(
        <Pressable onPress={onPress} style={style.container}>
            <Text style={style.text}>{text}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',

        width: '80%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})

export default CustomButton