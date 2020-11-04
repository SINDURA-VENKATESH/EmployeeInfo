import loginData from '../../data/loginData.json';
function validateUser(email, password){
    let isValid = (email === loginData.username && password === loginData.password)
    return {
        type:'VALIDATE_USER_SUCCESS',isValid
    }
}
export default validateUser;