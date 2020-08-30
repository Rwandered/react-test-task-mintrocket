import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import {useInput} from "../../hooks/useInput";
import {useModal} from "../../hooks/useModal";
import {postUser, updateUser} from "../../redux/actions/actionCreators";



const ModalWindow = () => {

  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('')
  const modal = useModal()

  useEffect( () => {
    firstName.setValue(modal.content.first_name)
    lastName.setValue(modal.content.last_name)
    email.setValue(modal.content.email)
    // eslint-disable-next-line
  }, [modal.isModal])

  const clearValue = () => {
    firstName.clear()
    lastName.clear()
    email.clear()
  }

  const setUserChanged = ( {email, first_name, last_name} ) => {
    modal.dispatch( updateUser({
      ...modal.content,
      email,
      first_name,
      last_name
    })) }

  const submitUserHandle = (event) => {
    event.preventDefault()

    const [ firstName, lastName, email ] = event.target
    const newUser = {
      email: email.value,
      first_name: firstName.value,
      last_name: lastName.value
    }

    clearValue()
    modal.content.isEdit
      ? setUserChanged(newUser)
      : modal.dispatch( postUser(newUser) )

    modal.modalHandle()
  }


  if(modal.isModal) {

    return ReactDOM.createPortal(
      <div className={'modal__layer'}>
        <div className={'modal__wrapper cyan darken-3'}>
          <div className={'modal__title'}>
            <h2>{ modal.content.title }</h2>
          </div>
          <div className={'modal__form'}>
            <form onSubmit={ submitUserHandle }>
              <input type={'text'} name={'firstName'} placeholder="First Name" {...firstName.inputValue }/>
              <input type={'text'} name={'lastName'} placeholder="Last Name" {...lastName.inputValue } />
              <input type={'email'} name={'email'} placeholder="Email" {...email.inputValue }/>
              <button
                className={'btn frm__control'}
                type="submit"
              >
                { modal.content.title }
              </button>
              <button
                className={'btn frm__control red darken-4'}
                type="button"
                onClick={ () => modal.modalHandle() }
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    )
  }  else {
    return null
  }

}

export default React.memo(ModalWindow)