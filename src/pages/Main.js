import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/actions/actionCreators";
import Loader from "../components/Loader";
import ModalWindow from "../components/ModalWindow";
import axios from "axios";

const Main = () => {

  const { users } = useSelector( state => state.users)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( fetchUsers() )
    // eslint-disable-next-line
  }, [])


  const editHandleClick = async (user) => {
    console.log('user: ', user)

    const resU = await axios.put(`https://reqres.in/api/users/${user.id}`, { //update
      email: user.value,
      first_name: 'ROUT',
      last_name: user.value
    })
    const dataU = await resU.data
    console.log('dataG: ', dataU)
  }



  if(!users) {
    return <Loader/>
  }

  return (
    <div className="row">
      <h1>User list</h1>
      <hr/>

      <ModalWindow/>

        <div className="search__wrapper">
          <div className="input-field">
            <input id="search" type="text"/>
              <label htmlFor="search">Search</label>
          </div>
          <button>Search</button>
        </div>
        <hr/>
      <div className={'table__body'}>
        {
          users
            ? <table>
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
                        <img src={ user.avatar } alt=""/>
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
                        <Link to={'/'} tag="button" className="btn btn-small red darken-4">Delete</Link>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
            : <Loader/>

        }
      </div>
    </div>
  )
}

export default Main