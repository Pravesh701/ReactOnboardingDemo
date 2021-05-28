import { StyleSheet } from 'react-native'

//Custom Imports
import color from '../../utils/color';
import fontFamily from '../../utils/fonts';
import { normalize, screenHeight, screenWidth, vh, vw } from '../../utils/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingHorizontal: vw(16)
    },
    titleStyle: {
        color: color.textColor,
        fontSize: normalize(22),
        fontFamily: fontFamily.muliBold,
        marginTop: vh(10),
    },
    dateBorderContainer: {
        backgroundColor: color.borderColor,
        borderColor: color.textColor,
        borderWidth: vw(0.5),
        borderRadius: vw(5),
        marginTop: vh(20),
        padding: vw(5)
    },
    dateContainer: {
        backgroundColor: color.background,
    },
    dateAndTimeText: {
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        marginTop: vh(20),
        marginHorizontal: vw(16)
    },
    starStyle: {
        color: 'red'
    },
    lineStyle: {
        height: vh(0.5),
        backgroundColor: color.textColor,
        marginTop: vh(20)
    },
    chooseBookingContainer: {
        marginTop: vh(10),
        alignSelf: 'center',
        paddingHorizontal: vw(20),
        paddingVertical: vh(15),
        borderColor: color.textColor,
        borderWidth: vw(0.5),
        borderRadius: vw(5),
        marginEnd: vw(20)
    },
    chooseBookingText: {
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
    },
    bookingDateAndTime: {
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        marginHorizontal: vw(16),
        marginTop: vh(20)
    },
    noTimeSlotsAvailable: {
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        marginTop: vh(18),
        alignSelf: 'center'
    },
    inputTextContainer: {
        marginHorizontal: vw(16),
        paddingVertical: vh(20),
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliRegular,
    },
    modalContainer: {
        flex: 1,
    },
    modalMainContainer: {
        width: vw(screenWidth - 50),
        backgroundColor: color.white,
        marginTop: 40,
        paddingBottom: 40,
        height: vh(screenHeight - 100),
        borderRadius: vw(10)
    },
    searchContainer: {
        backgroundColor: color.buttonBackground,
        flexDirection: 'row',
        paddingHorizontal: vw(16),
        borderRadius: vw(10)
    },
    searchIcon: {
        width: vw(30),
        height: vh(20),
        alignSelf: 'center'
    },
    paymentModes: {
        color: color.black,
        fontSize: normalize(18),
        fontFamily: fontFamily.muliBold,
        marginTop: vh(10),
        paddingHorizontal: vw(16)
    },
    searchResultText: {
        color: color.textColor,
        fontSize: normalize(14),
        fontFamily: fontFamily.muliRegular,
        marginTop: vh(15),
        marginStart: vw(20)
    },
    closeStyle: {
        position: 'absolute',
        zIndex: 100,
        top: vh(5),
        end: vw(5)
    },
    chooseDateListContainer: {
        marginStart: vw(20),
        marginTop: vh(10),
        marginBottom: vh(10)
    }
})
export default styles;
