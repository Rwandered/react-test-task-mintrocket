import {
  CHANGE_AUTH,
  CLOSE_MODAL,
  CREATE_USER,
  DEL_USER,
  FETCH_USERS, RESET_SEARCH, SET_COUNT_PAGES, SET_CURRENT_PAGE,
  SET_MODAL, SET_PER_PAGE,
  SWITCH_SEARCH,
  UPDATE_USER
} from "./actionType";
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

export const switchSearch = (searchString) => {
  return {
    type: SWITCH_SEARCH,
    payload: searchString
  }
}

export const resetSearch = () => {
  return {
    type: RESET_SEARCH
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
      const { pages } = getState()
      const res = await axios.get(`https://reqres.in/api/users?page=${pages.page.currentPage}&per_page=${pages.page.perPage}`)
      const { data } = await res.data
      const result = await res.data

      dispatch( setUsers({
        users: data,
        totalUsers: result.total
      }))

    } catch (e){}
  }
}

export const updateUser = (user) => {
  return async (dispatch, getState) => {
    try {
      const resU = await axios.put(`https://reqres.in/api/users/${user.id}`, user)
      await resU.data
      const { users } = getState()
      const needUserIndex = users.users.users.findIndex((usr) => usr.id === user.id)
      const newUsers = users.users.users.map( (usr, index) => {
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
      console.log('dataC: ', dataC)
      dispatch( createUser( [dataC] ) )

    } catch (e) {
      throw new Error(e)
    }
  }
}

export const setCurrentPage = (pageNum) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNum
  }
}

export const setCountPages = (countPage) => {
  return {
    type: SET_COUNT_PAGES,
    payload: countPage
  }
}

export const setPerPage = (countPage) => {
  return {
    type: SET_PER_PAGE,
    payload: countPage
  }
}

export const searchUsers = (page) => {
  return async (dispatch, getState) => {
    try {

      const { pages } = getState()
      const res = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${pages.page.perPage}`)

      const result = await res.data
      return result

    } catch (e){}
  }
}

