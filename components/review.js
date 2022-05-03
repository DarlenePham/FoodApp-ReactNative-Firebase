import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ViewMoreText from 'react-native-view-more-text';

const Review = ({ data }) => {
	const renderViewMore = (onPress) => {
		return (
			<MaterialIcons
				name='expand-more'
				size={25}
				style={{ alignSelf: 'center' }}
				onPress={onPress}
			/>
		);
	};

	const renderViewLess = (onPress) => {
		return (
			<MaterialIcons
				name='expand-less'
				size={25}
				style={{ alignSelf: 'center' }}
				onPress={onPress}
			/>
		);
	};

	return (
		<View style={styles.outline}>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ flexDirection: 'row', width: '82%' }}>
					<Image style={styles.logo} source={require('../assets/pro5.png')} />
					<View style={{ marginTop: 15 }}>
						<Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5 }}>
							{data.data.username}
						</Text>
						<Text style={{ fontsize: 15, fontWeight: '400' }}>{data.data.time.toDate().toDateString()}</Text>
					</View>
				</View>
				<Text
					style={{
						right: 0,
						fontSize: 18,
						fontWeight: '700',
						marginTop: 15,
					}}>
					{data.data.rate}/5
				</Text>
			</View>

			<View style={styles.review}>
				<ViewMoreText
					numberOfLines={5}
					renderViewMore={renderViewMore}
					renderViewLess={renderViewLess}>
					<Text>
						{data.data.review}
					</Text>
				</ViewMoreText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    outline: {
        width: '90%',
        height: 200,
        alignSelf: 'center',
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
