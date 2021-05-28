import { StyleSheet } from 'react-native'

//Custom Imports
import color from '../../utils/color';
import { normalize, vh, vw } from '../../utils/dimensions';
import fontFamily from '../../utils/fonts';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingHorizontal: vw(16)
    },
    titleStyle:{
        color: color.textColor,
        fontSize: normalize(22),
        fontFamily: fontFamily.muliBold,
        marginTop: vh(10),
    },
    dateBorderContainer:{
        backgroundColor: color.borderColor,
        borderColor: color.textColor,
        borderWidth: vw(0.5),
        borderRadius: vw(5),
        marginTop: vh(20),
        padding: vw(5)
    },
    dateContainer:{
        backgroundColor: color.background,
    },
    dateAndTimeText:{
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        marginTop: vh(20),
        marginHorizontal: vw(16)
    },
    starStyle:{
        color: 'red'
    },
    lineStyle:{
        height: vh(0.5),
        backgroundColor: color.textColor,
        marginTop: vh(20)
    },
    chooseBookingContainer:{
        marginTop: vh(10),
        alignSelf: 'center',
        paddingHorizontal: vw(20),
        paddingVertical: vh(15),
        borderColor: color.textColor,
        borderWidth: vw(0.5),
        borderRadius: vw(5)
    },
    chooseBookingText:{
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
    },
    bookingDateAndTime:{
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        marginHorizontal: vw(16),
        marginTop: vh(20)
    },
    noTimeSlotsAvailable:{
        color: color.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        marginTop: vh(18),
        alignSelf: 'center'
    }
})
export default styles;
