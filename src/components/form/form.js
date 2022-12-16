import { View, StyleSheet, TextInput } from "react-native"
import React from "react"

const Form = ({value, setValue, placeholder, secureTextEntry}) => {

    return(
        <View style= {style.container}>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                style={style.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        padding: 10,
        marginVertical: 5
    },
    input: {
        fontSize: 20
    }
})

export default Form