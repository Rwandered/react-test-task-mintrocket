import {FETCH_USERS} from "./actionType";
import axios from "axios";


export const setUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users
  }
}


export const fetchUsers = () => {

  return async (dispatch, getState) => {
    try {
      console.log('S1:',getState())
      const res = await axios.get('https://reqres.in/api/users')
      const { data } = await res.data
      console.log('D:', data)
      dispatch( setUsers(data) )
      console.log('S2:',getState())
    } catch (e){}
  }
}