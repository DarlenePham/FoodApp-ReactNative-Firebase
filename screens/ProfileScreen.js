import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import Activity from '../components/activity'
import { auth } from '../firebase';

const SearchScreen = () => {
    const navigation = useNavigation()

    const handleSetting = () => {
        navigation.navigate("Setting")
    }

    const handleFavorite = () => {
        navigation.navigate("Favorite")
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome5 name="arrow-circle-left" size={30} style={{ left: 15, marginTop: 35, position: 'absolute' }} />
                    </TouchableOpacity>
                    <Image
                        style={styles.ava}
                        source={require('../assets/pro5.png')}
                    />
                    <Text style={styles.name}>{auth.currentUser?.uid}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={styles.outline}
                        onPress={handleFavorite}
                    >
                        <Image
                            style={styles.logo}
                            source={require('../assets/pro5.png')}
                        />
                        <Text style={styles.buttonText}>Favorite</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.outline}
                    >
                        <Image
                            style={styles.logo}
                            source={require('../assets/pro5.png')}
                        />
                        <Text style={styles.buttonText}>Diet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.outline}
                        onPress={handleSetting}
                    >
                        <Image
                            style={styles.logo}
                            source={require('../assets/pro5.png')}
                        />
                        <Text style={styles.buttonText}>Setting</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.block}>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, width: '95%' }}>
                        <Text style={styles.header}>Recent Activities</Text>
                    </View>
                    <Activity />
                    <Activity />
                    <Activity />
                    <Text style={{ alignSelf: 'center', margin: 10 }}>View more</Text>
                </View>

                <View style={styles.block}>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, width: '95%' }}>
                        <Text style={styles.header}>Allergy/Dislike</Text>
                    </View>
                    <Text style={{ alignSelf: 'center', margin: 10 }}>This feature is not yet developed</Text>
                </View>

                <View style={styles.block}>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, width: '95%' }}>
                        <Text style={styles.header}>Budget</Text>
                    </View>
                    <Text style={{ alignSelf: 'center', margin: 10 }}>This feature is not yet developed</Text>
                </View>
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
    box: {
        marginTop: 50,
        marginBottom: 10
    },
    ava: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 30,
        fontWeight: '700',
        alignSelf: 'center',
        padding: 10
    },
    outline: {
        width: 90,
        height: 90,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25
    },
    logo: {
        height: 60,
        width: 60,
        padding: 5
    },
    buttonText: {
        color: '#191919',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 13,
        padding: 5
    },
    header: {
        width: '80%',
        color: 'black',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 10
    },
    block: {
        marginLeft: 15,
        marginBottom: 15
    },
})