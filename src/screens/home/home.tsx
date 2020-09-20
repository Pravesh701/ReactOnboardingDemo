import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import { ReducersModal } from '../../utils/modals'; 
import { vh, normalize } from '../../utils/dimensions';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';


interface Props {
    route: any;
    navigation: any;
}

const HomeScreen = (props: Props) => {

    const [emailData, setemailData] = useState('');
    const { email, password } = useSelector((state: ReducersModal) => state.userDataReducer);
    const { commonLoading } = useSelector((state: ReducersModal) => state.globalLoaderReducer);

    return (
        <View style={styles.container}>
            <ImageBackgroundBlank />
            <Image style={styles.profileImageStyle} source={images.profilePlaceHolderIcon} />
            <Text style={styles.userEmail}>{email}</Text>
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