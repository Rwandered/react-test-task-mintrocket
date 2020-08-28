import React, {useEffect, useState} from "react";
import axios   from "axios";
import {Link} from "react-router-dom";

const Main = () => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users')
    const { data } = await res.data
    setUsers(data)
    console.log('D:', data)
  }

  useEffect( () => {
    getUsers()
  }, [])

  return (
    <div className="row">
      <h1>User list</h1>
      <hr/>
      <button>Create new user</button>
        <div className="search__wrapper">
          <div className="input-field">
            <input id="search" type="text"/>
              <label htmlFor="search">Search</label>
          </div>
          <button>Search</button>
        </div>
        <hr/>
      <div className={'table__body'}>
        <table>
          <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {
            users.map( (user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={ user.avatar } alt=""/>
                  </td>
                  <td>{ user.first_name }</td>
                  <td>{ user.last_name } </td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={'/'} tag="button" className="btn btn-small">Edit</Link>

                  </td>
                  <td>
                    <Link to={'/'} tag="button" className="btn btn-small">Delete</Link>
                  </td>
                </tr>
              )
            })
          }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Main