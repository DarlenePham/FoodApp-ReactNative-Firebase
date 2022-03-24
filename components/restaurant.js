import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

const Restaurant = () => {
    return (
        <View>
            <TouchableOpacity
          //nPress={handleLogin}
          style={styles.outline}
            >
                <View style={styles.imageWrapper}>

                </View>
                <View style={{ flexDirection:"row" }}>
                   <Text style={styles.title}>Restaurant Name</Text>
                   <Text style={styles.rate}>4.9/5</Text>
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
        width: 350,
        height: 200,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
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
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
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