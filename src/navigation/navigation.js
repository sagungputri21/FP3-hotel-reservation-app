import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import HomeTest from "../screens/homeScreen";
import LoginScreens from "../screens/loginScreens";
import LogoutScreen from "../screens/logoutScreens";
import { selectUser } from "../features/useSlice";
import BookingScreen from "../screens/bookingScreen";
import DetailScreen from "../screens/detailScreen";
import BookingHistoryPage from "../screens/bookingHistory";


const Stack = createNativeStackNavigator()

export default function Navigation() {
    // const user = useSelector(selectUser)

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeTest}
                    options={{ title: 'Home' }}
                />
                {/* {user ? <Stack.Screen name="Logout" component={LogoutScreen}/> : <Stack.Screen name="Login" component={LoginScreens} />} */}
                {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
                <Stack.Screen name="Login" component={LoginScreens}/>
                <Stack.Screen name="Logout" component={LogoutScreen}/>
                <Stack.Screen name="BookingPage" component={BookingScreen}/>
                <Stack.Screen name="DetailPage" component={DetailScreen}/>
                <Stack.Screen name="BookingHistoryPage" component={BookingHistoryPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}