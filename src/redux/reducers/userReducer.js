import {CREATE_USER, DEL_USER, FETCH_USERS, UPDATE_USER} from "../actions/actionType";

const initState = {
  users: {
    users: [],
    totalUsers: 0
  }
}

const userReducer = (state = initState, { type, payload } ) => {

  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      }
    case CREATE_USER:
      return {
        ...state,
        users: { users: [...payload, ...state.users.users], totalUsers: state.users.totalUsers + 1 }
      }
    case UPDATE_USER:
      return {
        ...state,
        users: {...state.users, users: payload}
      }
    case DEL_USER:
      return {
        ...state,
        users: {
          ...state.users,
          users: state.users.users.filter( usr => usr.id !== payload),
          totalUsers: state.users.totalUsers - 1
        }
      }
    default:
      return state
  }
}

export default userReducer