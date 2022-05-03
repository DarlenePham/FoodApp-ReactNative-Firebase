import React, { useState } from 'react';
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
import FavoriteScreen from './screens/FavoriteScreen';
import { RestaurantContext } from './context/restaurantContext';

const Stack = createNativeStackNavigator();

export default function App() {
	const [res, setRes] = useState([]);
	const [resReview, setResReview] = useState([]);

	const getAllRes = (value) => {
		setRes(value);
	};

	const getAllResReview = (value) => {
		setResReview(value);
	}

	return (
		<RestaurantContext.Provider value={{ res:res, getAllRes:getAllRes, getAllResReview:getAllResReview }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Login'
						component={LoginScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Home'
						component={HomeScreen}
					/>
					{/*<Stack.Screen
						options={{ headerShown: false }}
						name='Search'
						component={SearchScreen}
	/>*/}
					<Stack.Screen name='Search' options={{ headerShown: false }}>
  {() => <SearchScreen data={res}  />}
</Stack.Screen>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Restaurant'
						component={RestaurantScreen}
					/>
					{/*<Stack.Screen
						options={{ headerShown: false }}
						name='Review'
						component={ReviewScreen}
/>*/}
					<Stack.Screen name='Review' options={{ headerShown: false }}>
  {() => <ReviewScreen data={resReview}  />}
</Stack.Screen>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Profile'
						component={ProfileScreen}
					/>
          <Stack.Screen
						options={{ headerShown: false }}
						name='Setting'
						component={SettingScreen}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name='Favorite'
						component={FavoriteScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</RestaurantContext.Provider>
	);
}