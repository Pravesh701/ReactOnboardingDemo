import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

//Custom Imports
import color from '../../utils/color';
import Strings from '../../utils/strings';

//Custom Imports
import styles from './styles';

interface Props {

}

const SheMaid = (props: Props) => {
    return (
        <LinearGradient
            colors={[
                color.startGradientBtn,
                color.endGradientBtn
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.linearGradient}
            locations={[0.0, 1]}>
            <Text style={styles.titleStyle}>{Strings.sheMaid}</Text>
            <View style={styles.dateBorderContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateAndTimeText}>{Strings.dateAndTime} <Text style={styles.starStyle}>*</Text></Text>
                    <View style={styles.lineStyle} />
                    <TouchableOpacity style = {styles.chooseBookingContainer}>
                        <Text style = {styles.chooseBookingText}>{Strings.chooseBooking}</Text>
                    </TouchableOpacity>
                    <Text style = {styles.bookingDateAndTime}>{Strings.bookingDateAndTime}</Text>
                    <Text style = {styles.noTimeSlotsAvailable}>{Strings.noTimeSlotsAvailable}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default SheMaid;
