import { combineReducers } from 'redux';

//custom imports below
import { globalLoaderReducer, userDataReducer, internetStatusReducer } from './globalReducers';

const appReducer = combineReducers({
    globalLoaderReducer,
    userDataReducer,
    internetStatusReducer
})

export default appReducer;

