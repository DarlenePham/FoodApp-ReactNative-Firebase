import { useNavigation } from '@react-navigation/core'
import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { collection, doc, ref, onValue, array, getDocs, getDoc, getField, query } from 'firebase/firestore';

import Restaurant from '../components/restaurant'
import { RestaurantContext } from '../context/restaurantContext';
import { auth, db } from '../firebase';

const SearchScreen = ({data}) => {
    const resContext = useContext(RestaurantContext);
	const [userData, setUserData] = useState([]);

  const navigation = useNavigation();

  useEffect( () => {
    // get every restaurants and store them to the context
    const data = [];
    getDoc(doc(db, 'User', auth.currentUser?.uid))
	.then((qu) => { 
		data = qu.data()['favorite'];
		setUserData(data);
	});
}, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 50}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="arrow-circle-left" size={30} style={{ paddingLeft: 15 }} />
          </TouchableOpacity>
          <Text style={styles.header}>Favorite Restaurants</Text>
          <MaterialCommunityIcons name="filter-menu" size={30} style={{ right: 25 }} />
        </View>
        {userData.map((el) => <Text>{el}</Text>)}
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB74D'
  },
  header: {
    width: '80%',
    color: 'black',
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 18,
    marginBottom: 10
  },
  wrapper: {

  }
})