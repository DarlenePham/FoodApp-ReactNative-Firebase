import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import Review from '../components/review'
import Menu from '../components/menu'

const RestaurantScreen = ({navigation, route}) => {
    /*
    const navigation = useNavigation()
    */

    const handleReview = () => {
        navigation.navigate("Review")
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.coverWrapper}>
                    <View style={styles.image}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <FontAwesome5 name="arrow-circle-left" size={30} style={{ left: 15, marginTop: 35 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.block}>
                    <View style={{ flexDirection: "row", borderBottomColor: 'black', borderBottomWidth: 1, width: '95%' }}>
                        <Text style={styles.title}>{route.params.name}</Text>
                        <AntDesign name="hearto" size={30} style={{ position: 'absolute', right: 0, paddingTop: 10 }} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.info}>xx miles</Text>
                        <Text style={styles.info}>•</Text>
                        <Text style={styles.info}>{route.params.streetNum} {route.params.street1}</Text>
                    </View>
                    <Text style={styles.info}>                     {route.params.zipCode} {route.params.city}, {route.params.state}</Text>
                    <Text style={styles.info}>Open time: {route.params.monHours}</Text>
                </View>

                <View style={styles.block}>
                    <View style={{ flexDirection: "row", borderBottomColor: 'black', borderBottomWidth: 1, width: '95%' }}>
                        <Text style={styles.title}>Reviews</Text>
                        <Text style={styles.rate}>{route.params.avgStars}/5</Text>
                    </View>
                    <View style={{ marginLeft: -10 }}><Review></Review></View>
                    <Text style={{ alignSelf: 'center' }} onPress={handleReview}>View more</Text>
                </View>

                <View style={styles.block}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '95%' }}>
                        <Text style={styles.title}>Menu</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.subTitle}>Menu 1</Text>
                        <><Menu></Menu></>
                        <><Menu></Menu></>
                        <><Menu></Menu></>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.subTitle}>Menu 2</Text>
                        <><Menu></Menu></>
                        <><Menu></Menu></>
                        <><Menu></Menu></>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.subTitle}>Menu 3</Text>
                        <><Menu></Menu></>
                        <><Menu></Menu></>
                        <><Menu></Menu></>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default RestaurantScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FFB74D'
    },
    coverWrapper: {
        width: '100%',
        marginBottom: 10
    },
    image: {
        backgroundColor: 'gray',
        height: 250
    },
    block: {
        marginLeft: 10,
        marginBottom: 15
    },
    title: {
        width: '80%',
        padding: 8,
        fontSize: 28,
        fontWeight: '700',
        overflow: 'hidden'
    },
    subTitle: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    rate: {
        width: '20%',
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
        color: '#1C1C1C'
    }
})