import React, {useState} from "react";
import {useHistory} from "react-router";

const Auth = () => {

  const [login, setLogin] = useState('')
  const [pwd, setPwd] = useState('')

  const history = useHistory()

  const submitAuthHandle = (event) => {
    event.preventDefault()
    console.log('login: ', login)
    console.log('pwd: ', pwd)
    setLogin('')
    setPwd('')
    history.push('/')
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
                type="text"
                className="validate"
                value={login}
                onChange={ (event) => setLogin(event.target.value)}
                required
              />
              <label htmlFor={'login'}>Login</label>
              <span className="helper-text" data-error="Login is required"/>
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                value={pwd}
                onChange={ (event) => setPwd(event.target.value)}
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