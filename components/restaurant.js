import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { useState } from 'react';
import {onSnapshot, collection, getFirestore } from "@firebase/firestore";
//import { getFoods } from './FirestoreApi'

const Restaurant = (props) => {

    const navigation = useNavigation()

    const handleRestaurant = () => {
        navigation.navigate("Restaurant", {
            name: props.name,
            avgStars: props.avgStars,
            streetNum: props.streetNum,
            street1: props.street1,
            street2: props.street2,
            zipCode: props.zipCode,
            city: props.city,
            state: props.state,
            monHours: props.monHours
        })
    }
    
    return (
        <View>
            <TouchableOpacity
          onPress={handleRestaurant}
          style={styles.outline}
            >
                <View style={styles.imageWrapper}>
                </View>
                <View style={{ flexDirection:"row" }}>
                   <Text style={styles.title}>{props.name}</Text>
                   <Text style={styles.rate}>{props.avgStars}/5</Text>
                </View>
                <View style={{ flexDirection:"row" }}>
                    <Text style={styles.info}>xx miles</Text>
                    <Text style={styles.info}>|</Text>
                    <Text style={styles.info}>xx mins</Text>
                    <Text style={styles.info}>|</Text>
                    <Text style={styles.info}>Price: $$</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Restaurant;

const styles = StyleSheet.create({
    outline: {
        width: '95%',
        height: 200,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 10,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2, }, 
        shadowOpacity: 0.25,
        overflow: "hidden"
    },
    imageWrapper: {
        width: '100%',
        height: 130,
        backgroundColor: 'gray',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title: {
        width: '80%',
        padding: 8,
        fontSize: 20,
        fontWeight: '700',
        overflow: 'hidden'
    },
    rate: {
        width: '20%',
        paddingTop: 8,
        fontSize: 20,
        fontWeight: '700',
    },
    info: {
        paddingLeft: 8,
        fontWeight: '500',
        opacity: 0.5,
        color: 'gray'
    }
})