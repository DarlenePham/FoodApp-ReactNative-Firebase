import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import Header from '../components/header'
import Restaurant from '../components/restaurant'

const SearchScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
         <><Header />
         </>
         <ScrollView>
         <View style={{ flexDirection:"row" }}>
         <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <FontAwesome5 name="arrow-circle-left" size={30} style={{paddingLeft: 15}} />
          </TouchableOpacity>
          <Text style={styles.header}>Search result</Text>
          <MaterialCommunityIcons name="filter-menu" size={30} style={{right: 25}} />
         </View>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
         <Restaurant/>
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
        fontSize: 28,
        fontWeight: '700',
        marginLeft: 18,
        marginBottom: 10
      },
})