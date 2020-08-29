import React from "react";
import {Link} from "react-router-dom";
import {deleteUser, setModal} from "../redux/actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import noAvatar from '../assets/img/no-photo.png'

const Table = () => {

  const { users } = useSelector( state => state.users)
  const dispatch = useDispatch()

  const editHandleClick = (user) => {
    dispatch( setModal( {...user, title: 'Edit user', isEdit: true} ) )
  }

  const deleteHandleClick = (id) => {
    dispatch( deleteUser(id) )
  }

  return (
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
        users && users.map( (user, index) => {
          return (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img className={'user_avatar'} src={ user.avatar || noAvatar } alt='' />
              </td>
              <td>{ user.first_name }</td>
              <td>{ user.last_name } </td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={'/'}
                  tag="button"
                  className="btn btn-small"
                  onClick={ () => editHandleClick(user) }
                >
                  Edit
                </Link>
              </td>
              <td>
                <Link
                  to={'/'}
                  tag="button"
                  className="btn btn-small red darken-4"
                  onClick={ () => deleteHandleClick(user.id) }
                >
                  Delete
                </Link>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default Table