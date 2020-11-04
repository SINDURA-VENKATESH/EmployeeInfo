import loginData from '../../data/loginData.json';

const initialState = {
    isValid : false
  }

  export default function loginValidationReducer(state= initialState, action){
    switch(action.type){
        case "VALIDATE_USER_SUCCESS" :
            return {
                ...state,
                isValid : (action.email === loginData.username && action.password === loginData.password)
            }
        default: return state
    }
}