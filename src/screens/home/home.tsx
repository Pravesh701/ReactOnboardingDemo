import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import Loader from '../../components/loader';
import { signOutFirebaseUser } from './action';
import { ReducersModal } from '../../utils/modals';
import { vh, normalize, vw } from '../../utils/dimensions';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';


interface Props {
    route: any;
    navigation: any;
}

const HomeScreen = (props: Props) => {

    const dispatch = useDispatch();
    const { email, password } = useSelector((state: ReducersModal) => state.userDataReducer);
    const { commonLoading } = useSelector((state: ReducersModal) => state.globalLoaderReducer);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backButtonClick);
        }
    }, [])

    const handleLogout = async () => {
        dispatch(signOutFirebaseUser(props.navigation));
    };

    const backButtonClick = () => {
        console.log('backButtonClick home')
        if (props.navigation && props.navigation.goBack) {
            Alert.alert("Exit", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Exit", onPress: () => BackHandler.exitApp() }
            ], { cancelable: true });
            return true;
        }
        return false;
    }


    function renderLinearGradient(title: string) {
        return (
            <LinearGradient
                colors={[
                    color.startGradientBtn,
                    color.endGradientBtn
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
                locations={[0.0, 1]}>
                <Text style={styles.buttonText}>{title}</Text>
            </LinearGradient>
        );
    }

    return (
        <React.Fragment>
            {
                commonLoading && <Loader isVisible={commonLoading} />
            }
            <View style={styles.container}>
                <ImageBackgroundBlank />
                <Image style={styles.profileImageStyle} source={images.profilePlaceHolderIcon} />
                <Text style={styles.userEmail}>{email}</Text>
                <TouchableOpacity
                    onPress={handleLogout}
                    activeOpacity={0.8}
                    // disabled = { emailVal === '' && passwordVal === '' }
                    style={styles.gradientButton}>
                    {renderLinearGradient('Logout')}
                </TouchableOpacity>
            </View>
        </React.Fragment>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: vw(16)
    },
    profileImageStyle: {
        marginTop: vh(100)
    },
    userEmail: {
        fontFamily: fontFamily.muliSemiBold,
        fontSize: normalize(16),
        color: color.startGradientBtn,
        marginTop: vh(12)
    },
    gradientButton: {
        marginTop: vh(100),
        width: '100%',
        height: vh(48),
        alignSelf: 'center',
        borderColor: color.endGradientBtn,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(8),
        borderWidth: vw(2),
    },
    buttonText: {
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        textAlign: 'center',
        color: color.white,
        backgroundColor: 'transparent',
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})