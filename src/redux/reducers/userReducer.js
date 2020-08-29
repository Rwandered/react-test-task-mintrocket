import {CREATE_USER, DEL_USER, FETCH_USERS, UPDATE_USER} from "../actions/actionType";

const initState = {
  users: []
}

const userReducer = (state = initState, { type, payload } ) => {
  switch (type) {
    case FETCH_USERS:
      return {...state, users: payload }
    case CREATE_USER:
      return {
        ...state,
        users: [...payload, ...state.users]
      }
    case UPDATE_USER:
      return {...state, users: payload}
    case DEL_USER:
      return {...state, users: state.users.filter( usr => usr.id !== payload) }
    default:
      return state
  }
}

export default userReducer