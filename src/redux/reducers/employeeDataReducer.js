const initialState = {
    users : []
  }

export default function employeeDataReducer(state= initialState, action){
    switch(action.type){
        case "GET_EMPLOYEE_DATA" :
            return {
                ...state,
                users: action.data
            }
        default: return state
    }
}