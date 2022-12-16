import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "react-native";
import CustomButton from "../components/button/customButton";
import { logout } from "../features/useSlice";

const LogoutScreen = ({navigation}) => {

    const handleLogout = () => {
        dispatch(logout())
        alert("berhasil logout")
        if(user!==null){
            navigation.navigate("/")
        }
    }
    
    return(
        <View>
            <Text>
                Welcome User
                {/* <CustomButton text="Logout" onPress={handleLogout()} /> */}
            </Text>
        </View>
    )
}

export default LogoutScreen