function validateUser(email, password){
    console.log("came here");
    return {
        type:'VALIDATE_USER_SUCCESS',email,password
    }
}
export default validateUser;