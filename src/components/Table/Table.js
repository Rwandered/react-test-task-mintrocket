import React, {useState} from "react";
import {Link} from "react-router-dom";
import {deleteUser, setModal} from "../../redux/actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import noAvatar from '../../assets/img/no-photo.png'
import {useUsers} from "../../hooks/useUsers";
import Loader from "../Loader/Loader";

const Table = () => {

  const [isLoading, setLoading] = useState(true)
  const { search } = useSelector( state => state.search)
  const data = useUsers()
  const dispatch = useDispatch()

  const users = search.isSearch ? data.getSortUsers() : data.getAllUsers()

  const editHandleClick = (user) => {
    dispatch( setModal( {...user, title: 'Edit user', isEdit: true} ) )
  }

  const deleteHandleClick = (id) => {
    dispatch( deleteUser(id) )
  }

  if(users.length === 0 && search.isSearch) {
    return (
      <>
        <h1>No data...</h1>
        <h3>Please try to find data on another page</h3>
      </>
    )
  }

  if(users.length === 0) {
    return <Loader/>
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

        users.map( (user, index) => {
          return (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                { isLoading ? <Loader/> : null }
                <img className={'user_avatar'} src={ user.avatar || noAvatar } alt='' onLoad={ () => setLoading(false)}/>
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

export default React.memo(Table)