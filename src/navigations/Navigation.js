import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import HotelDetailScreen from "../screens/HotelDetailScreen";

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: true,
              headerTitle: 'Hotel',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFF',
              },
              tabBarLabel: 'Search',
              tabBarIcon: ({color, size}) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
          name="Search Results"
          component={SearchScreen}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Search Results',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
          }}
        />
        <BottomTab.Screen
          name="Hotel Detail"
          component={HotelDetailScreen}
          options={{
            tabBarButton: () => null,
            headerShown: true,
            headerTitle: 'Hotel Detail',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFF',
            },
          }}
        />
{/*   
          <BottomTab.Screen
            name="Favorites"
            component={user ? Favorites : Login}
            options={{
              headerShown: user ? true : false,
              tabBarLabel: 'Favorites',
              headerTitle: 'Favorites',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFF',
              },
              tabBarIcon: ({color, size}) => (
                <Icon name="favorite" color={color} size={size} />
              ),
            }}
          />
  
          <BottomTab.Screen
            name={user ? 'Profile' : 'Account'}
            component={user ? Profile : Login}
            options={{
              headerShown: user ? true : false,
              headerTitle: 'Profile',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFF',
              },
              tabBarLabel: user ? 'Profile' : 'Account',
              tabBarIcon: ({color, size}) => (
                <Icon name="person" color={color} size={size} />
              ),
            }}
          /> */}
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }