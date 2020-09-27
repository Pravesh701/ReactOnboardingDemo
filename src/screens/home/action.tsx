import auth from '@react-native-firebase/auth';
import { StackActions } from '@react-navigation/native';

//Custom Imports
import constant from "../../utils/constants";
import ActionNames from '../../utils/actionNames';
import { UserDataModal } from '../../utils/modals';
import { showHideLoader } from "../../action/commonReduxAction";

export const signOutFirebaseUser = (navigation: any) => {
    return (dispatch: Function, getState: Function) => {
        let { isConnected } = getState().internetStatusReducer;
        if (isConnected) {
            dispatch(showHideLoader(true));
            auth()
                .signOut()
                .then(() => {
                    dispatch(showHideLoader(false));
                    dispatch({
                        type: ActionNames.UPDATE_USER_DATA,
                        payload: { ... new UserDataModal() }
                    })
                    navigation.popToTop();
                })
                .catch((error: any) => {
                    dispatch(showHideLoader(false));
                    console.log('Firebase Logout Error');
                    navigation.popToTop();
                })
        }
        else {
            constant.showSnackBar("Please check your internet connection.")
        }
    }
}