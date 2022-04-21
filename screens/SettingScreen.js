import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const SearchScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: "row", marginTop: 50, marginBottom: 30 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesome5 name="arrow-circle-left" size={30} style={{ paddingLeft: 15 }} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Setting</Text>
                </View>
                <View>
                    <View style={styles.tab}>
                        <View style={{ width: '90%' }}>
                            <Text style={styles.tabText}>Change User Information</Text>
                        </View>
                        <FontAwesome5 name="angle-double-right" size={30} style={{ right: 0, positon: 'absolute' }} />
                    </View>
                    <View style={styles.tab}>
                        <View style={{ width: '90%' }}>
                            <Text style={styles.tabText}>Password and Security</Text>
                        </View>
                        <FontAwesome5 name="angle-double-right" size={30} style={{ right: 0, positon: 'absolute' }} />
                    </View>
                    <View style={styles.tab}>
                        <View style={{ width: '90%', flexDirection: 'row' }}>
                            <Text style={styles.tabText}>Go Premium</Text>
                            <FontAwesome5 name="crown" size={22} style={{ paddingLeft: 10, paddingTop: 5 }} />
                        </View>
                        <FontAwesome5 name="angle-double-right" size={30} style={{ right: 0, positon: 'absolute' }} />
                    </View>
                    <View style={styles.tab}>
                        <View style={{ width: '90%' }}>
                            <Text style={styles.tabText}>Notification</Text>
                        </View>
                        <FontAwesome5 name="angle-double-right" size={30} style={{ right: 0, positon: 'absolute' }} />
                    </View>
                    <View style={styles.tab}>
                        <View style={{ width: '90%' }}>
                            <Text style={styles.tabText}>COVID-19 Safety Center</Text>
                        </View>
                        <FontAwesome5 name="angle-double-right" size={30} style={{ right: 0, positon: 'absolute' }} />
                    </View>
                    <View style={styles.tab}>
                        <View style={{ width: '90%' }}>
                            <Text style={styles.tabText}>Promotions and Rewards</Text>
                        </View>
                        <FontAwesome5 name="angle-double-right" size={30} style={{ right: 0, positon: 'absolute' }} />
                    </View>
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
    tab: {
        flexDirection: 'row',
        width: '95%',
        height: 70,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        alignItems: 'center',
        alignSelf: 'center'
    },
    tabText: {
        fontSize: 20,
        fontWeight: '400',
        paddingTop: 5,
    }
})