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
	const [res, setRes] = useState([]);

  const navigation = useNavigation();
  
  //console.log(querySnapshot.data[0]);

  useEffect(async () => {
    // get every restaurants and store them to the context
    const data = [];
    //const querySnapshot = await getDocs(collection(db, "User", auth.currentUser?.uid, "favorite"));
    //console.log(querySnapshot)
    const querySnapshot = doc(db, 'User', auth.currentUser?.uid, 'favorite')
    console.log(querySnapshot)
    /*querySnapshot.forEach((doc) => {
      console.log(doc.data());
        data.push({
            id: doc.id,
            data: doc.data(),
        });
    });*/
    resContext.getAllRes(data);
    setRes(data); // store them in the state too for rendering
//console.log(data);
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
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
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