import {CHANGE_AUTH, CLOSE_MODAL, CREATE_USER, DEL_USER, FETCH_USERS, SET_MODAL, UPDATE_USER} from "./actionType";
import axios from "axios";

const setUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users
  }
}

const createUser = (user) => {
  return {
    type: CREATE_USER,
    payload: user
  }
}

const editUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

const removeUser = (id) => {
  return {
    type: DEL_USER,
    payload: id
  }
}

export const setModal = (modalContent) => {
  return {
    type: SET_MODAL,
    payload: modalContent
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const changeAuth = (token) => {
  return {
    type: CHANGE_AUTH,
    payload: token
  }
}

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get('https://reqres.in/api/users')
      const { data } = await res.data

      dispatch( setUsers(data) )

    } catch (e){}
  }
}

export const updateUser = (user) => {
  return async (dispatch, getState) => {
    try {
      const resU = await axios.put(`https://reqres.in/api/users/${user.id}`, user)
      await resU.data
      const { users } = getState()
      const needUserIndex = users.users.findIndex((usr) => usr.id === user.id)

      const newUsers = users.users.map( (usr, index) => {
         if(index === needUserIndex) {
           return user
         } else {
           return usr
         }
      })

      dispatch(editUser(newUsers))

    } catch (e) {
      throw new Error(e)
    }
  }
}

export const deleteUser =  (id) => {

  return async (dispatch, getState) => {
    try {
      const resD = await axios.delete(`https://reqres.in/api/users/${id}`) //delete

      if(resD.status === 204) {
        dispatch( removeUser(id) )
      }

    } catch (e) {
      throw new Error(e)
    }
  }
}

export const fetchAuthToken = (authData) => {

  return async (dispatch, getState) => {
    try {
      const resL = await axios.post('https://reqres.in/api/login', authData) //create
      const { token } = await resL.data
      localStorage.setItem('token', token)
      dispatch( changeAuth( token ) )

      return token

    }catch (e) {
      throw new Error(e)
    }
  }
}

export const postUser = (user) => {

  return async (dispatch, getState) => {
    try {
      const resC = await axios.post('https://reqres.in/api/users', user) //create
      const dataC = await resC.data
      dispatch( createUser( [dataC] ) )

    } catch (e) {
      throw new Error(e)
    }
  }
}


