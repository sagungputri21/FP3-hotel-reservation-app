// import React from "react"
import { 
    View, 
    ImageBackground, 
    ScrollView, 
    StatusBar, 
    StyleSheet,
    Text 
} from "react-native"
import CustomButton from "../components/button/customButton";
import React from "react";
import { selectUser } from "../features/useSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { navigate } from "../features/pageSlice";
import client from "../api/baseApi";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "react-native";
import COLORS from "../components/color/color";


const DetailScreen = ({navigation}) => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [hotelName, setHotelName] = useState([])
  const [hotelAddress, setHotelAddress] = useState([])
  const [hotelPhotos, setHotelPhotos] = useState([])
  const [hotelPrice, setHotelPrice] = useState([])
  const [hotelAbout, setHotelAbout] = useState([])

  console.log("ini di detail, user=>", user)

  const handleNavigate = () => {
    if(user!==null){
      navigation.navigate('BookingPage')
    } else {
      dispatch(
        navigate({
          pageIs: true
        })
      )
      navigation.navigate('Login')
    }
  }

  const getDataDetail = async () => {
    try{
      const data = await client.get(
        `hotels/details`, 
        {params: {domain: 'AE', locale: 'en_GB', hotel_id: '1105156'}}
      )
      setHotelName(data.data.summary);
      setHotelAddress(data.data.summary.location.address)
      setHotelPhotos(data.data.propertyGallery.images[0].image)
    } catch (err) {
      console.log("error=", err)
    }
  }

  useEffect(() => {
    getDataDetail()
  },[])

  console.log("ini data detail",hotelName)

  return(
    <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          backgroundColor: COLORS.white,
          paddingBottom: 20,
          }}> 
      <ImageBackground style={style.headerImage} source={{uri: hotelPhotos.url}}>
        </ImageBackground>
        <View>
            <View style={style.iconContainer}>
            </View>
            <View style={{marginTop: 20, paddingHorizontal: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{hotelName.name}</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLORS.grey,
                  marginTop: 5,
                }}>
                {hotelAddress.city}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'row'}}>
          
                  </View>
                  <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                    4.0
                  </Text>
                </View>
                <Text style={{fontSize: 13, color: COLORS.grey}}>365reviews</Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{lineHeight: 20, color: COLORS.grey}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas justo nulla, venenatis in sagittis nec, commodo sed elit. Aliquam erat volutpat. 
                Pellentesque finibus nunc erat, at consectetur purus elementum at. 
                Aliquam venenatis, nisl vitae commodo dictum, arcu odio fermentum neque, ac eleifend lacus tortor eu arcu.
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Price per night
              </Text>
              <View style={style.priceTag}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: COLORS.grey,
                    marginLeft: 5,
                  }}>
                  $200
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: COLORS.grey,
                    marginLeft: 5,
                  }}>
                  +breakfast
                </Text>
              </View>
            </View>
            <View style={style.btn}>
              <CustomButton text="Book Now" onPress={()=> handleNavigate()} />
             
            </View>
          </View>
    </ScrollView>
  )
}

export default DetailScreen

const style = StyleSheet.create({
      btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10,
      },
    
      priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
      },
      iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
      },
      header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
      },
  });