//Custom imports
import ActionNames from '../../utils/actionNames';
import { SheMaidModel } from '../../utils/modals';

export const sheMaidDataReducer = (state = new SheMaidModel(), action: any) => {
    switch (action.type) {
        case ActionNames.UPDATE_SHEMAID_DATA:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};
