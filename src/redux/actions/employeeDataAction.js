import employeeData from '../../data/employeeData.json';
function getEmployeeData(){
    console.log("came here");
    return {
        type:'GET_EMPLOYEE_DATA',employeeData
    }
}
export default getEmployeeData;