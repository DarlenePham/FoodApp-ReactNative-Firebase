import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Keyboard, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Review = () => {
    return (
        <View style={styles.outline}>
            <View style={{ flexDirection:"row" }}>
                <View style={{flexDirection:"row", width: '82%'}}>
                <Image
                 style={styles.logo}
                 source={require('../assets/pro5.png')}
                 />
                 <View style={{marginTop: 15}}>
                 <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 5}}>Username</Text>
                 <Text style={{fontsize: 15, fontWeight: '400'}}>mm/dd/yy</Text>
                 </View>
                </View>
                 <Text style={{right: 0, fontSize: 18, fontWeight: '700', marginTop: 15}}>4.0/5</Text>
            </View>
            <View style={styles.review}>
                <Text>This is where the review goes...</Text>
                <Text>This is where the review goes...</Text>
                <Text>This is where the review goes...</Text>
                <Text>This is where the review goes...</Text>
                <Text>This is where the review goes...</Text>
                <Text>This is where the review goes...</Text>
            </View>
                <FontAwesome5 name="expand-alt" size={20} style={{position: 'absolute', bottom: 10, right: 10}} />
            
        </View>
    )
};

export default Review

const styles = StyleSheet.create({
    outline: {
        width: '90%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 10,
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2, }, 
        shadowOpacity: 0.25
    },
    logo: {
        height: 60,
        width: 60,
        padding: 5,
        margin: 10
    },
    review: {
        fontSize: 14,
        marginLeft: 15,
        overflow: 'hidden'
    }
})