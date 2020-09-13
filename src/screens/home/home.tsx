import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import { vh, normalize } from '../../utils/dimensions';
import AsyncStorage from '@react-native-community/async-storage';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';


interface Props {
    route: any;
    navigation: any;
}

const HomeScreen = (props: Props) => {

    const [emailData, setemailData] = useState('');

    useEffect(() => {
        getData();
    }, [emailData])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('email')
            if (value !== null) {
                setemailData(value)
            }
        } catch (e) {
            console.log('AsyncStorage ', e)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackgroundBlank />
            <Image style={styles.profileImageStyle} source={images.profilePlaceHolderIcon} />
            <Text style={styles.userEmail}>{emailData === '' ? 'User Email ID' : emailData}</Text>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    profileImageStyle: {
        marginTop: vh(100)
    },
    userEmail: {
        fontFamily: fontFamily.muliSemiBold,
        fontSize: normalize(16),
        color: color.startGradientBtn,
        marginTop: vh(12)
    }
})