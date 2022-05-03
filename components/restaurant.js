<<<<<<< Updated upstream
import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { useState } from 'react';
import {onSnapshot, collection, getFirestore } from "@firebase/firestore";
//import { getFoods } from './FirestoreApi'

const Restaurant = () => {
    const db = getFirestore();

    const[restaurants, setRestaurants] = useState([]);
=======
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
//import { getStorage, ref } from "firebase/storage";
import { ref, getDownloadURL, getStorage } from "firebase/storage";
//import storage from '../firebase';

// here you have the data prop which was passed in from the HomeScreen. Use this prop to init the component.

const Restaurant = ({ data }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [imgUrl, setImgUrl] = useState();

	const navigation = useNavigation();

	// here you pass the res id as a param so the RestaurantScreen can get the info from the context.
	const handleRestaurant = () => {
		navigation.navigate('Restaurant', { id: data.id });
	};

	/**console.log(data.data.cover);
>>>>>>> Stashed changes

	useEffect(() => {
		const storage = getStorage();
		const picref = ref(storage, '/maison_alyzee.png');
		console.log(picref);
		getDownloadURL(picref).then((url) => {
			setImgUrl(url)
		})
		const func = async () => {
			//const storage = getStorage();
			//console.log(picref);
		}
		//if(imgUrl == undefined || imgUrl == null) { func() }
		},[])*/

	// change to whatever your object is.
	/*
        I define the object like this:
        {
            id: res.id,
            data: {
                name: 
                etc
            }
        }
    */
   //console.log(data.data.cover);

	return (
		<View>
			<TouchableOpacity onPress={handleRestaurant} style={styles.outline}>
				<View style={styles.imageWrapper}><Image source={ {uri: data.data.cover} } style={{ height: 130, width: '100%'}}/></View>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.title}>{data.data.name}</Text>
					<Text style={styles.rate}>{data.data.rate}</Text>
					<FontAwesome name='star' size={25} style={{paddingTop: 8, paddingLeft: 3, color: 'gold'}}/>
				</View>
				{/* Do the same as I shown above */}
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.info}>xx miles</Text>
					<Text style={styles.info}>|</Text>
					<Text style={styles.info}>xx mins</Text>
					<Text style={styles.info}>|</Text>
					<Text style={styles.info}>Price: {data.data.expensive}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Restaurant;

const styles = StyleSheet.create({
	outline: {
		width: '95%',
		height: 200,
		alignSelf: 'center',
		backgroundColor: 'white',
		borderRadius: 5,
		margin: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		overflow: 'hidden',
	},
	imageWrapper: {
		width: '100%',
		height: 130,
		backgroundColor: 'gray',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
	title: {
		width: '80%',
		padding: 8,
		fontSize: 20,
		fontWeight: '700',
		overflow: 'hidden',
	},
	rate: {
		//width: '15%',
		right: 0,
		paddingTop: 8,
		fontSize: 20,
		fontWeight: '700',
	},
	info: {
		paddingLeft: 8,
		fontWeight: '500',
		opacity: 0.5,
		color: 'gray',
	},
});