import axios from 'axios';
import getEmployeeData from '../actions/employeeDataAction';

export default function getEmployeeList() {
    return function(dispatch) {
        return axios.get("http://localhost:4000/user").then(result => {
            dispatch(getEmployeeData(result));
        });
    };
}
