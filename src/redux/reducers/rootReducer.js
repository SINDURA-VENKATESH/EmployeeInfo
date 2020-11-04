import { combineReducers } from 'redux';
import loginValidationReducer from './loginValidationReducer';
import employeeDataReducer from './employeeDataReducer';

const rootReducer = combineReducers({
  login: loginValidationReducer,
  employeeList: employeeDataReducer,
})

export default rootReducer;
