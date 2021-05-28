import React, { useState } from 'react'
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'

//Custom Imports
import color from '../../utils/color';
import { vh, vw } from '../../utils/dimensions';
import Strings from '../../utils/strings';

//Custom Imports
import styles from './styles';
import images from '../../utils/images';
import { FlatList } from 'react-native-gesture-handler';
import CustomDatePicker from '../../components/CustomDatePicker';
import { ReducersModal } from '../../utils/modals';
import { useDispatch, useSelector } from 'react-redux';
import { hitBookingDateDataAPI } from './action';

interface Props {

}

const data = [
    { search_result: Strings.cash },
    { search_result: Strings.onlinePayment },
]

const SheMaid = (props: Props) => {
    const dispatch = useDispatch();
    const [inputValue, setinputValue] = useState('')
    const [search, setSearch] = useState('')
    const [selectedPaymentMode, setSelectedPaymentMode] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectDate, setSelectDate] = useState('')
    const { date_response } = useSelector((state: ReducersModal) => state.sheMaidDataReducer);

    const onPressPaymentResult = (result: string) => {
        setSelectedPaymentMode(result)
        setShowModal(false)
    }
    const onPressPaymentMode = () => {
        setShowModal(true)
    }
    const onPressClose = () => {
        setShowModal(false)
        setSelectedPaymentMode('')
    }
    const renderSearchResult = ({ item, index }: any) => {
        return (
            <TouchableOpacity onPress={() => onPressPaymentResult(item.search_result)}>
                <Text style={styles.searchResultText}>{item.search_result}</Text>
            </TouchableOpacity>
        )
    }

    const onChangeText = (key: string, value: any) => {
        console.log('showDatePicker onChangeText', value)
        dispatch(hitBookingDateDataAPI({ date: value }))
        setSelectDate(value)
    }

    const renderBookingDate = ({ item, index }: any) => {
        console.log('renderBookingDate', item)
        return (
            <View style = {styles.chooseBookingContainer}>
                <Text style = {styles.chooseBookingText}>{item}</Text>
            </View>
        )
    }
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
            <ScrollView keyboardShouldPersistTaps={'never'}>
                <Text style={styles.titleStyle}>{Strings.sheMaid}</Text>
                <View style={styles.dateBorderContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateAndTimeText}>{Strings.dateAndTime} <Text style={styles.starStyle}>*</Text></Text>
                        <View style={styles.lineStyle} />
                        <CustomDatePicker
                            fieldName={'dob'}
                            onChangeText={onChangeText}
                            placeholder={Strings.chooseBooking}
                        />
                        <Text numberOfLines={1} style={styles.bookingDateAndTime}>{`${Strings.bookingDateAndTime}`} {`${selectDate}`}</Text>
                        {date_response.length !== 0 ?
                            <FlatList
                                data={date_response}
                                horizontal
                                keyExtractor={(item: any, index: number) => index.toString()}
                                renderItem={renderBookingDate}
                                style = {styles.chooseDateListContainer}
                            />
                            :
                            <Text style={styles.noTimeSlotsAvailable}>{Strings.noTimeSlotsAvailable}</Text>
                        }
                    </View>
                </View>
                <View style={styles.dateBorderContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateAndTimeText}>{Strings.paymentMode} <Text style={styles.starStyle}>*</Text></Text>
                        <View style={styles.lineStyle} />
                        <Text onPress={onPressPaymentMode} style={[styles.bookingDateAndTime, { marginBottom: vh(20), marginStart: vw(30) }]}>{selectedPaymentMode === '' ? Strings.selectPaymentMode : selectedPaymentMode}</Text>
                    </View>
                </View>
                <View style={styles.dateBorderContainer}>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateAndTimeText}>{Strings.specialRequirements}</Text>
                        <View style={styles.lineStyle} />
                        <TextInput
                            value={inputValue}
                            onChangeText={(value: string) => setinputValue(value)}
                            placeholderTextColor={color.textColor}
                            placeholder={Strings.typeSomeThings}
                            style={styles.inputTextContainer}
                        />
                    </View>
                </View>
                <Modal scrollHorizontal={true} coverScreen={true} avoidKeyboard={false} style={styles.modalContainer} isVisible={showModal}>
                    <View style={styles.modalMainContainer}>
                        <TouchableOpacity onPress={onPressClose} style={styles.closeStyle}>
                            <Image source={images.close} />
                        </TouchableOpacity>
                        <View style={styles.searchContainer}>
                            <Image resizeMode={'contain'} style={styles.searchIcon} source={images.search_icon} />
                            <TextInput
                                value={search}
                                editable={false}
                                onChangeText={(value: string) => setSearch(value)}
                                placeholderTextColor={color.textColor}
                                placeholder={Strings.search}
                                style={styles.inputTextContainer}
                            />
                        </View>
                        <Text style={styles.paymentModes}>{Strings.paymentModes}</Text>
                        <FlatList
                            data={data}
                            keyExtractor={(item: any, index: number) => index.toString()}
                            renderItem={renderSearchResult}
                        />
                    </View>
                </Modal>
            </ScrollView>
        </LinearGradient>
    )
}

export default SheMaid;
