import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, setPerPage} from "../../redux/actions/actionCreators";


const Select = () => {
  const dispatch = useDispatch()
  const { page } = useSelector(state => state.pages)

  const changeCountHandle = (event) => {
    console.log(event.target.value)
    dispatch( setPerPage( +event.target.value ))
    dispatch( fetchUsers() )
  }

  return (
    <div className="input-field select__wrapper">
      <div className={'select__title'}>
        <p>Count users</p>
      </div>
        <div className={'select__block'}>
          <select className={'browser-default select'} onChange={ changeCountHandle } defaultValue={page.perPage}>
            <option value="" disabled>Choose your option</option>
            { [2,6,12].map( (elem, i) =>  <option key={i} value={elem}>{elem}</option>) }
          </select>
        </div>
    </div>
  )
}

export default Select