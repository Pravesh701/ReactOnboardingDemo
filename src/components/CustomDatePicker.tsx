import moment from 'moment'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

//custom imports
import Fonts from '../utils/fonts'
import Colors from '../utils/color'
import { vw, vh, normalize } from '../utils/dimensions';
import fontFamily from '../utils/fonts';

interface Props {
    ref?: any;
    placeholder?: any;
    maximumDate?: any;
    fieldName?: string;
    extraStyles?: Object;
    onChangeText: Function;
    minimumDate?: any;
}

const CustomDatePicker = React.memo(({ onChangeText, extraStyles, fieldName, ref, maximumDate, placeholder, minimumDate }: Props) => {

    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false)
    const [date, setDate] = useState('')

    const showDatePicker = () => {
        console.log('showDatePicker')
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirm = (date: any) => {
        hideDatePicker();
        var formattedDate = moment(date).format("DD-MM-YYYY")
        setDate(formattedDate)
        onChangeText(fieldName, formattedDate)
    };

    return (
        <React.Fragment>
            <TouchableOpacity style={styles.btnStyle} onPress={showDatePicker}>
                <Text style={[styles.placeholderStyle]}>{placeholder}</Text>
            </TouchableOpacity>
            {
                <DateTimePickerModal
                    ref={ref}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={minimumDate}
                    date={maximumDate}
                    maximumDate={maximumDate}
                    isVisible={isDatePickerVisible}
                />
            }
        </React.Fragment>
    )
});

export default CustomDatePicker

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: vh(64),
        borderWidth: 1,
        paddingLeft: vw(12),
        paddingRight: vw(15),
        borderRadius: vw(10),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.borderColor,
    },
    placeholderStyle: {
        color: Colors.textColor,
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
    },
    btnStyle: {
        marginTop: vh(10),
        alignSelf: 'center',
        paddingHorizontal: vw(20),
        paddingVertical: vh(15),
        borderColor: Colors.textColor,
        borderWidth: vw(0.5),
        borderRadius: vw(5),
        zIndex: 100
    }
})