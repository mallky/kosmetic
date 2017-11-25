import { combineReducers } from 'redux';
import fieldReducer from './field';
import applicationReducer from './application';


export default combineReducers({
    field: fieldReducer,
    application: applicationReducer
});