const initialState = {
    isValid : false
  }

export default function loginValidationReducer(state= initialState, action){
    switch(action.type){
        case "VALIDATE_USER_SUCCESS" :
            return {
                ...state,
                isValid : action.isValid
            }
        default: return state
    }
}