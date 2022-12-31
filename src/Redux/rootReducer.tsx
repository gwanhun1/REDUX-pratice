import { combineReducers } from 'redux';
import countReducer from './Reducer/countReducer';
import lightReducer from './Reducer/lightReducer';

const RootReducer = combineReducers({
	countReducer,
	lightReducer,
});
export default RootReducer;
