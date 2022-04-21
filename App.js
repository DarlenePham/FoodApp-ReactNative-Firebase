import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ReviewScreen from './screens/ReviewScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false }} name="Search" component={SearchScreen} />
        <Stack.Screen options={{headerShown: false }} name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen options={{headerShown: false }} name="Review" component={ReviewScreen} />
        <Stack.Screen options={{headerShown: false }} name="Profile" component={ProfileScreen} />
        <Stack.Screen options={{headerShown: false }} name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

