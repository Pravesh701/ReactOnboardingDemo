/**
 * OnBoarding Demo for React Native App
 */
import React, { ReactElement, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

//Custom Imports
import images from '../../utils/images';
import { DesignHeight, vw, vh } from '../../utils/dimensions';
import screens from '../../utils/screens';

interface Props {
    navigation: any
}

export default function SplashScreen({ navigation }: Props): ReactElement {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(screens.ONBOARDING_SCREENS, { screen: screens.LOGIN });
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={images.splashLogo}
                resizeMode={'cover'}
                style={styles.splashImg}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    splashImg: {
        width: vw(DesignHeight),
        height: vh(DesignHeight)
    }
})