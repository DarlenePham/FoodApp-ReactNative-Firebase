import React from "react";
import { StyleSheet, Text, Image, View} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ViewMoreText from 'react-native-view-more-text';

const Review = () => ({
        renderViewMore(onPress) {
            return (
                <MaterialIcons name="expand-more" size={25} style={{ alignSelf: 'center' }} onPress={onPress} />
            )
        },
        renderViewLess(onPress) {
            return (
                <MaterialIcons name="expand-less" size={25} style={{ alignSelf: 'center' }} onPress={onPress} />
            )
        },
        render() {

            return (
                <View style={styles.outline}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", width: '82%' }}>
                            <Image
                                style={styles.logo}
                                source={require('../assets/pro5.png')}
                            />
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5 }}>Username</Text>
                                <Text style={{ fontsize: 15, fontWeight: '400' }}>mm/dd/yy</Text>
                            </View>
                        </View>
                        <Text style={{ right: 0, fontSize: 18, fontWeight: '700', marginTop: 15 }}>4.0/5</Text>
                    </View>

                    <View style={styles.review}>
                        <ViewMoreText
                            numberOfLines={5}
                            renderViewMore={this.renderViewMore.bind(this)}
                            renderViewLess={this.renderViewLess.bind(this)}
                        >
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </ViewMoreText>
                    </View>
                </View>
            )
        }
    })

export default Review

    const styles = StyleSheet.create({
        outline: {
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 5,
            margin: 10,
            paddingBottom: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2, },
            shadowOpacity: 0.25,
            //overflow: 'hidden'
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
            marginRight: 15,
            //paddingBottom: 7,
            //overflow: 'hidden'
        }
    });