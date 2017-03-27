import { combineReducers } from 'redux';
import auth from './auth';
import BillsReducer from './billsReducer';

export default combineReducers({
  auth,
  bills: BillsReducer
});
