import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchUsers, setModal} from "../../redux/actions/actionCreators";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import Table from "../../components/Table/Table";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";


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
      <Search/>
        <hr/>
      <div className={'table__body'}>
        <Table/>
      </div>
      <Footer/>
      <hr/>
      <ModalWindow/>
    </div>
  )
}

export default React.memo(Main)