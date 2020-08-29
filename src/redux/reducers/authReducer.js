import {CHANGE_AUTH} from "../actions/actionType";

const initState = {
  auth: {
    isAuth: false,
    token: ''
  }
}

const authReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case CHANGE_AUTH:
      return {...state, auth: {...state.auth, token: payload , isAuth: !state.auth.isAuth }}
    default:
      return state
  }
}

export default authReducer