import { combineReducers } from 'redux';

//custom imports below
import { sheMaidDataReducer } from '../screens/sheMaid/reducer';
import { globalLoaderReducer, internetStatusReducer } from './globalReducers';

const appReducer = combineReducers({
    globalLoaderReducer,
    internetStatusReducer,
    sheMaidDataReducer
})

export default appReducer;

