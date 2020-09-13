import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';

interface Props {
    route: any;
    navigation: any;
}

const YourLibrary = (props: Props) => {
    return (
        <View style={styles.container}>
            <ImageBackgroundBlank />
            <Text>YourLibrary</Text>
        </View>
    )
}

export default YourLibrary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})