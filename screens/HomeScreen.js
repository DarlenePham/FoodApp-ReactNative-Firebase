import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	TouchableOpacity,
} from 'react-native';
import firebase, { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FontAwesome5 } from '@expo/vector-icons';


import Header from '../components/header';
import Category from '../components/category';
import Restaurant from '../components/restaurant';
import { RestaurantContext } from '../context/restaurantContext';

const HomeScreen = () => {
	// use the context
	const resContext = useContext(RestaurantContext);
	const [res, setRes] = useState([]);
	const navigation = useNavigation();

	const handleSearch = () => {
		navigation.navigate('Search');
	};

	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace('Login');
			})
			.catch((error) => alert(error.message));
	};

	useEffect(async () => {
		// get every restaurants and store them to the context
		const data = [];
		const querySnapshot = await getDocs(collection(db, 'Restaurant'));
		querySnapshot.forEach((doc) => {
			data.push({
				id: doc.id,
				data: doc.data(),
			});
		});
		resContext.getAllRes(data);
		setRes(data); // store them in the state too for rendering
	}, []);

	return (
		<View style={styles.container}>
			<>
				<Header />
			</>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.header}>Category</Text>
				<ScrollView
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					style={styles.scrollView}>
					<>
						<Category />
					</>
				</ScrollView>

				<TouchableOpacity
					style={styles.button}>
					<Text style={styles.buttonText}>Can't decide? Let's find out!</Text>
				</TouchableOpacity>

				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.header}>You may like</Text>
						<TouchableOpacity onPress={handleSearch}>
							<FontAwesome5
								name='arrow-circle-right'
								size={30}
								style={{ right: 0 }}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={styles.scrollViewRestaurant}>
							{/* map the data to each restaurant button and pass the data to the component */}
							{res.slice(0, 4).map((el) => (
								<View style={styles.wrapper}>
									<Restaurant data={el} />
								</View>
							))}
						</ScrollView>
					</View>
				</View>

				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.header}>Nearest to you</Text>
						<FontAwesome5
							name='arrow-circle-right'
							size={30}
							style={{ right: 0 }}
						/>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={styles.scrollViewRestaurant}>
							{res.slice(4, 8).map((el) => (
								<View style={styles.wrapper}>
									<Restaurant data={el} />
								</View>
							))}
						</ScrollView>
					</View>
				</View>

				<View style={{ marginTop: 10, marginBottom: 10 }}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.header}>Explore new tastes</Text>
						<FontAwesome5
							name='arrow-circle-right'
							size={30}
							style={{ right: 0 }}
						/>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<ScrollView
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							style={styles.scrollViewRestaurant}>
							{res.slice(8, 12).map((el) => (
								<View style={styles.wrapper}>
									<Restaurant data={el} />
								</View>
							))}
						</ScrollView>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFB74D',
	},
	header: {
		width: '80%',
		color: 'black',
		fontSize: 22,
		fontWeight: '700',
		marginLeft: 18,
		marginBottom: 10,
	},
	buttonText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 18,
	},
	button: {
		backgroundColor: '#FF7000',
		width: '80%',
		padding: 15,
		borderRadius: 25,
		alignItems: 'center',
		alignSelf: 'center',
		margin: 20,
	},
	scrollView: {
		maxHeight: 120,
	},
	wrapper: {
		maxWidth: 380,
	},
	scrollViewRestaurant: {
		maxHeight: 230,
	},
});