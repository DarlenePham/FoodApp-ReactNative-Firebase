import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	ScrollView,
	View,
	TouchableOpacity,
	Image
} from 'react-native';
import { FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons';

import Review from '../components/review';
import Menu from '../components/menu';
import { RestaurantContext } from '../context/restaurantContext';
import { doc, setDoc, updateDoc, arrayUnion, collection, getDocs } from "firebase/firestore"; 
import { auth, db } from '../firebase';
//import firebase from 'firebase/compat/app';
//import { FadeInFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

const RestaurantScreen = ({ route }) => {
	const resContext = useContext(RestaurantContext);
	const [resReview, setResReview] = useState([]);
	const navigation = useNavigation();

useEffect(async () => {
	let subColRef = collection(db, 'Restaurant', route.params.id, 'Review');
const reviews = await getDocs(subColRef);
let data = [];
reviews.forEach((doc) => {
	data.push({
		id: doc.id,
		data: doc.data(),
	});
	console.log(data)
});
resContext.getAllResReview(data);
setResReview(data);
//console.log(data);
}, [])
//console.laog(reviews.docs.map((el) => ({id: el.id, data: el.data()})));

	const handleReview = () => {
		navigation.navigate('Review');
	};

	const handleFavorite = () => {
		updateDoc(doc(db, 'User', auth.currentUser?.uid), {favorite: arrayUnion(route.params.id)})
		//setDoc(doc(db, 'User', auth.currentUser?.uid, 'Favorite', route.params.id))
		//console.log(info.data.id);
	};

	//console.log(resContext.res);

	// filter the context to get the correct res using the id (the id is passed as a param)
	const data = resContext.res.filter((el) => el.id === route.params.id);

	const info = data[0];

	//console.log(data[0].data);

	// then just use this data variable to populate the screen. I already did the name for you. Do the same thing for the rest.

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.coverWrapper}>
					<View style={styles.image}>
					<Image source={ {uri: info.data.cover} } style={{ height: '100%', width: '100%'}}/>
					</View>
					<View style={{position: 'absolute'}}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<FontAwesome5
								name='arrow-circle-left'
								size={30}
								style={{ left: 15, top: 0, marginTop: 35, position: 'absolute' }}
							/>
						</TouchableOpacity>
						</View>
				</View>

				<View style={styles.block}>
					<View
						style={{
							flexDirection: 'row',
							borderBottomColor: 'black',
							borderBottomWidth: 1,
							width: '95%',
						}}>
						<Text style={styles.title}>{info.data.name}</Text>
						<AntDesign
							name='hearto'
							size={30}
							style={{ position: 'absolute', right: 0, paddingTop: 10 }}
							onPress={handleFavorite}
						/>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.info}>xx miles</Text>
						<Text style={styles.info}>•</Text>
						<View>
						    <Text style={styles.info}>{info.data.address}</Text>
							<Text style={styles.info}>{info.data.city}, {info.data.state}</Text>
						</View>
					</View>
					<Text style={styles.info}>Open time: {info.data.openTime}</Text>
				</View>

				<View style={styles.block}>
					<View
						style={{
							flexDirection: 'row',
							borderBottomColor: 'black',
							borderBottomWidth: 1,
							width: '95%',
						}}>
						<Text style={styles.title}>Reviews</Text>
						<Text style={styles.rate}>{info.data.rate}</Text>
						<FontAwesome name='star' size={25} style={{padding: 3, paddingTop: 15, color: 'gray'}}/>
					</View>
					<View style={{ marginLeft: -10 }}>
					{resReview.slice(0, 1).map((el) => (
								<Review data={el}/>
							))}
					</View>
					<Text style={{ alignSelf: 'center' }} onPress={handleReview}>
						View more
					</Text>
				</View>

				<View style={styles.block}>
					<View
						style={{
							borderBottomColor: 'black',
							borderBottomWidth: 1,
							width: '95%',
						}}>
						<Text style={styles.title}>Menu</Text>
					</View>
					<View style={styles.block}>
						<Text style={styles.subTitle}>Menu 1</Text>
						<>
							<Menu></Menu>
						</>
						<>
							<Menu></Menu>
						</>
						<>
							<Menu></Menu>
						</>
					</View>
					<View style={styles.block}>
						<Text style={styles.subTitle}>Menu 2</Text>
						<>
							<Menu></Menu>
						</>
						<>
							<Menu></Menu>
						</>
						<>
							<Menu></Menu>
						</>
					</View>
					<View style={styles.block}>
						<Text style={styles.subTitle}>Menu 3</Text>
						<>
							<Menu></Menu>
						</>
						<>
							<Menu></Menu>
						</>
						<>
							<Menu></Menu>
						</>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default RestaurantScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: '#FFB74D',
	},
	coverWrapper: {
		width: '100%',
		marginBottom: 10,
		zIndex: 100
	},
	image: {
		backgroundColor: 'gray',
		height: 250,
		zIndex: 0
	},
	block: {
		marginLeft: 10,
		marginBottom: 15,
	},
	title: {
		width: '80%',
		padding: 8,
		fontSize: 28,
		fontWeight: '700',
		overflow: 'hidden',
	},
	subTitle: {
		marginTop: 10,
		fontSize: 20,
		fontWeight: '600',
	},
	rate: {
		//width: '20%',
		padding: 8,
		fontSize: 20,
		fontWeight: '700',
		marginTop: 8,
	},
	info: {
		paddingLeft: 8,
		paddingTop: 5,
		fontSize: 18,
		fontWeight: '500',
		opacity: 0.6,
		//color: '#1C1C1C',
	},
});