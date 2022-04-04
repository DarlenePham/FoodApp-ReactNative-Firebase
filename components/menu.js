import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Keyboard, Button } from "react-native";

const Menu = () => {
    return (
        <View style={styles.outline}>
            <View style={{width: '80%'}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.foodName}>Food Name</Text>
                <Text style={styles.price}>$x.xx</Text>
            </View>
            <Text style={styles.ingredient}>Ingredient A, ingredient B, ingredient C, etc.</Text>
            </View>
            <Image
                 style={styles.logo}
                 source={require('../assets/pro5.png')}
                 />
        </View>
    )
};

export default Menu

const styles = StyleSheet.create({
    outline: {
        flexDirection: 'row',
        width: '95%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
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
    foodName: {
        fontSize: 20,
        fontWeight: '600',
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
        position: 'absolute',
        right: 0
    },
    ingredient: {
        fontSize: 15,
        fontWeight: '500',
        opacity: 0.5,
        color: 'gray',
        paddingTop: 5
    }
})