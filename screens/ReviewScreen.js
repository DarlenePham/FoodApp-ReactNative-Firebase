import { useNavigation } from '@react-navigation/core'
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import Review from '../components/review'
import { RestaurantContext } from '../context/restaurantContext';

const ReviewScreen = ({data}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", marginTop: 50 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesome5 name="arrow-circle-left" size={30} style={{ paddingLeft: 15 }} />
                    </TouchableOpacity>
                    <Text style={styles.header}>{data.length} Reviews</Text>
                </View>
                {data.map((el) => (
									<Review data={el} />
                ))}
            </ScrollView>
        </View>
    )
}

export default ReviewScreen

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
})