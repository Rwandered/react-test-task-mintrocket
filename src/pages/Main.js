import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchUsers, setModal} from "../redux/actions/actionCreators";
import ModalWindow from "../components/ModalWindow";
import Table from "../components/Table";


const Main = () => {

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch( fetchUsers() )
    // eslint-disable-next-line
  }, [])

  const createUserHandle = () => {
    dispatch( setModal() )
  }


  return (
    <div className="row">
      <h1>User list</h1>
      <hr/>
      <button
        className={'btn frm__control'}
        type="button"
        onClick={ createUserHandle }
      >
        Create new user
      </button>
       <div className="search__wrapper">
          <div className="input-field">
            <input id="search" type="text"/>
            <label htmlFor="search">Search</label>
          </div>
          <div className={'input__control'}>
            <button className={'btn'}>Search</button>
          </div>
        </div>
        <hr/>
      <div className={'table__body'}>
        <Table/>
      </div>
      <ModalWindow/>
    </div>
  )
}

export default React.memo(Main)