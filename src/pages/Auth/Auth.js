import React  from "react";
import {useHistory} from "react-router";
import {useInput} from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import {fetchAuthToken} from "../../redux/actions/actionCreators";

const Auth = () => {

  const login = useInput('')
  const pwd = useInput('')
  const dispatch = useDispatch()
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

    dispatch( fetchAuthToken(authUser) )
      .then( token => {
        if(token) {
          clearValue()
          history.push('/')
        } else {
        //  error
        }
      })
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3 auth__wrapper ">
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
              <label htmlFor={'login'}>Login (Email)</label>
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