import {FETCH_USERS} from "../actions/actionType";

const initState = {
  users: []
}

const userReducer = (state = initState, { type, payload } ) => {
  switch (type) {
    case FETCH_USERS:
      return {...state, users: payload }
    default:
      return state
  }
}

export default userReducer