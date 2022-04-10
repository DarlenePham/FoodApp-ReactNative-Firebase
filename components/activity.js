import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Keyboard, Button } from "react-native";

const Menu = () => {
    return (
        <View style={styles.outline}>
            <Text style={styles.activity}>You add Restaurant X to your Favorite</Text>
        </View>
    )
};

export default Menu

const styles = StyleSheet.create({
    outline: {
        flexDirection: 'row',
        width: '95%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        overflow: 'hidden'
    },
    logo: {
        height: 60,
        width: 60,
        padding: 5,
        margin: 10,
        position: 'absolute',
        right: 0
    },
    activity: {
        fontSize: 15,
        fontWeight: '500',
        opacity: 0.5,
        color: 'gray',
        paddingTop: 5
    }
})