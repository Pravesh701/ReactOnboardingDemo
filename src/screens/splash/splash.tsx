/**
 * OnBoarding Demo for React Native App
 */
import React, { ReactElement, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'

//Custom Imports
import images from '../../utils/images';
import { DesignHeight, vw, vh } from '../../utils/dimensions';

interface Props {
    navigation: any
}

export default function SplashScreen({ navigation }: Props): ReactElement {

    useEffect(() => {
        // navigation.navigate('Details')
        // navigation.goBack()
        // navigation.popToTop()

        /* 1. Navigate to the Details route with params */
        // navigation.navigate('Details', {
        //     itemId: 86,
        //     otherParam: 'anything you want here',
        //   });

        //     <Text>itemId: {JSON.stringify(itemId)}</Text>
        //   <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        // navigation.push('Details', {
        //     itemId: Math.floor(Math.random() * 100),
        //   })

        //     <Stack.Screen
        //   name="Details"
        //   component={DetailsScreen}
        //   initialParams={{ itemId: 42 }}
        // />

        // navigation.navigate('Account', {
        //     screen: 'Settings',
        //     params: { user: 'jane' },
        //   });


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