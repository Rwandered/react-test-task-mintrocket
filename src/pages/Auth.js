import React, {useState} from "react";
import {useHistory} from "react-router";
import {useInput} from "../hooks/hooks";
import axios from "axios";

const Auth = () => {

  // const [login, setLogin] = useState('')
  // const [pwd, setPwd] = useState('')
  const login = useInput('')
  const pwd = useInput('')

  const history = useHistory()

  const clearValue = () => {
    login.clear()
    pwd.clear()
  }

  const submitAuthHandle = async (event) => {
    event.preventDefault()

    const [login, password] = event.target
    const authUser = {
      email: login.value,
      password: password.value,
    }

    console.log('authUser: ', authUser)

    //тут по идее в диспаст отправляем данные для отправки запроса
    // но пока тут выполним
    const resL = await axios.post('https://reqres.in/api/login', authUser) //create
    const dataL = await resL.data
    console.log('dataL: ', dataL)

    if(dataL.token) {
      // + token записать в localstorage
      history.push('/')
    } else {
    //  error
    }
    clearValue()
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Auth</h1>
        <div className="form__wrapper">
          <form onSubmit={submitAuthHandle}>
            <div className="input-field">
              <input
                id="login"
                type={'email'}
                name={'login'}
                className="validate"
                {...login.inputValue }
                required
              />
              <label htmlFor={'login'}>Login</label>
              <span className="helper-text" data-error="Login is required"/>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                name={'password'}
                className="validate"
                {...pwd.inputValue }
                required/>
              <label htmlFor={'password'}>Password</label>
              <span className="helper-text" data-error="Password is required"/>
            </div>
            <button className="btn green darken-3" type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth