//Custom import
import common from "../../utils/common";
import screens from "../../utils/screens";
import Services from "../../utils/services";
import constant from "../../utils/constants";
import endPoints from '../../utils/endpoint';
import ActionNames from "../../utils/actionNames";
import { showHideLoader } from "../../action/commonReduxAction";

export const updateUserDataFields = (key: string, value: any) => ({
    type: ActionNames.UPDATE_USER_DATA,
    payload: { [key]: value }
});

export const hitLoginAPI = (navigation: any) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        let { email, password } = getState().userDataReducer;
        if (isConnected) {
            let payload = {
                email,
                password
            }
            dispatch(showHideLoader(true));
            Services.postApiCall(endPoints.logInAdmin, payload, (response: any) => {
                let { data } = response;
                dispatch(showHideLoader(false));
                if (data.statusCode === common.status_code.success) {
                    console.log('Response Data', data)
                    navigation.navigate(screens.HOME_DRAWER);
                } else {
                    constant.showSnackBar(data.message);
                }
            }, (error: any) => {
                dispatch(showHideLoader(false));
                constant.showSnackBar(error.data.message);
            })
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}