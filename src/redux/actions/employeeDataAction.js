import employeeData from '../../data/employeeData.json';
function getEmployeeData(){
    return {
        type:'GET_EMPLOYEE_DATA',employeeData
    }
}
export default getEmployeeData;