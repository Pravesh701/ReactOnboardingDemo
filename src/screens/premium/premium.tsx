import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';

interface Props {
    route: any;
    navigation: any;
}

const PremiumScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <ImageBackgroundBlank />
            <Text>PremiumScreen</Text>
        </View>
    )
}

export default PremiumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})