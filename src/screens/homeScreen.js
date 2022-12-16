import React from "react"
import { View, Button } from "react-native"
import { selectUser } from "../features/useSlice"
import { logout } from "../features/useSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const HomeTest = ({ navigation }) => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        alert("berhasil logout")
    }

    const handleNavbar = () => {
        console.log("ini di navbar", user)

        if(user!==null) {
            return(
                <View>
                    <Button
                    title="Logout"
                    onPress={() =>
                        handleLogout()
                    }
                    />
                    <Button
                    title="Detail"
                    onPress={() =>
                        navigation.navigate('DetailPage')
                    }
                    />
                    <Button
                    title="Booking History"
                    onPress={() =>
                        navigation.navigate('BookingHistoryPage')
                    }
                    />
                
                </View>
            )
        }
        if(user===null) {
            return(
                <View>
                    <Button
                    title="Login"
                    onPress={() =>
                        navigation.navigate('Login')
                    }
                    />
                    <Button
                    title="Detail"
                    onPress={() =>
                        navigation.navigate('DetailPage')
                    }
                    />
                
                </View>
            )
        }
    }

    return(
        handleNavbar()
    )
}

export default HomeTest