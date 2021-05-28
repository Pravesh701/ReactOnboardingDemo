import ActionNames from "../../utils/actionNames";
import constant from "../../utils/constants";
import endPoint from "../../utils/endpoint";
import services from "../../utils/services";
import Strings from "../../utils/strings";


const showHideLoader = (isLoading: boolean) => ({
    type: ActionNames.LOADING,
    payload: { scope: 'logout', isLoading: isLoading }
});
export const updateFields = (key: string, value: any) => ({
    type: ActionNames.UPDATE_SHEMAID_DATA,
    payload: { [key]: value }
});


export const hitBookingDateDataAPI = (dataToSend: Object) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        if (isConnected) {
            dispatch(showHideLoader(true))
            services.postApiCall(endPoint.logInAdmin, dataToSend, (response: any) => {
                dispatch(showHideLoader(false))
                let { data } = response;
                console.log('hitBookingDateDataAPI response', data)
                if(data.result){
                dispatch(updateFields('date_response', data.result))
                }
            }, (error: any) => {
                dispatch(showHideLoader(false))
            })
        }
        else {
            constant.showSnackBar(Strings.internetConnMessage)
        }
    }
}
