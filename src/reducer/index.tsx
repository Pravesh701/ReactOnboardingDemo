import { combineReducers } from 'redux';

//custom imports below
import { globalLoaderReducer, internetStatusReducer } from './globalReducers';

const appReducer = combineReducers({
    globalLoaderReducer,
    internetStatusReducer
})

export default appReducer;

