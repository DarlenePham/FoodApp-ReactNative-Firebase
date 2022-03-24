import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'
import { FontAwesome5 } from "@expo/vector-icons";

import Header from '../components/header'
import Category from '../components/category'
import Restaurant from '../components/restaurant'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSearch = () => {
    navigation.navigate("Search")
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <><Header />
      </>
      <ScrollView>
      <Text style={styles.header}>Category</Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
        <><Category /></>
        </ScrollView>

        <TouchableOpacity
          //onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Can't decide? Let's find out!</Text>
        </TouchableOpacity>
      
        <View style={{ flexDirection:"row" }}>
          <Text style={styles.header}>You may like</Text>
          <TouchableOpacity
            onPress={handleSearch}
          >
            <FontAwesome5 name="arrow-circle-right" size={30} style={{right: 0}} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:"row" }}>
        <ScrollView horizontal={true} style={styles.scrollViewRestaurant}>
        <><Restaurant /></>
        <><Restaurant /></>
        <><Restaurant /></>
        <><Restaurant /></>
        </ScrollView>
        </View>

        <View style={{ flexDirection:"row" }}>
          <Text style={styles.header}>Nearest to you</Text>
          <FontAwesome5 name="arrow-circle-right" size={30} style={{right: 0}} />
        </View>
        <View style={{ flexDirection:"row" }}>
        <ScrollView horizontal={true} style={styles.scrollViewRestaurant}>
        <><Restaurant /></>
        <><Restaurant /></>
        <><Restaurant /></>
        <><Restaurant /></>
        </ScrollView>
        </View>

        <View style={{ flexDirection:"row" }}>
          <Text style={styles.header}>Explore new tastes</Text>
          <FontAwesome5 name="arrow-circle-right" size={30} style={{right: 0}} />
        </View>
        <View style={{ flexDirection:"row" }}>
        <ScrollView horizontal={true} style={styles.scrollViewRestaurant}>
        <><Restaurant /></>
        <><Restaurant /></>
        <><Restaurant /></>
        <><Restaurant /></>
        </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

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
    fontSize: 28,
    fontWeight: '700',
    marginLeft: 18,
    marginBottom: 10
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
    margin: 10
  },
  scrollView: {
    maxHeight: 120
  },
  scrollViewRestaurant: {
    maxHeight: 230
  }
})