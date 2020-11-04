import employeeData from '../../data/employeeData.json';
function getEmployeeData(data){
    return {
        type:'GET_EMPLOYEE_DATA',data
    }
}
export default getEmployeeData;