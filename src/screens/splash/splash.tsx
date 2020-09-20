/**
 * OnBoarding Demo for React Native App
 */
import { useDispatch } from 'react-redux';
import NetInfo from '@react-native-community/netinfo'
import React, { ReactElement, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

//Custom Imports
import images from '../../utils/images';
import screens from '../../utils/screens';
import { DesignHeight, vw, vh } from '../../utils/dimensions';
import { updateInternetStatusFields } from '../../action/commonReduxAction';

interface Props {
    navigation: any
}

export default function SplashScreen({ navigation }: Props): ReactElement {

    const dispatch = useDispatch();

    useEffect(() => {
        NetInfo.addEventListener(({ isConnected }) => handleConnectivityChange(isConnected));
        setTimeout(() => {
            navigation.navigate(screens.ONBOARDING_SCREENS, { screen: screens.LOGIN });
        }, 2000);
    }, [])

    /**
       * Handle internet connectivity change function.
       * @param isConnected 
       */
    function handleConnectivityChange(isConnected: boolean) {
        dispatch(updateInternetStatusFields('isConnected', isConnected))
    }

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