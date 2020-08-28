import React from "react";
import axios from "axios";
import {useInput} from "../hooks/hooks";



const ModalWindow = () => {

  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('')


  const clearValue = () => {
    firstName.clear()
    lastName.clear()
    email.clear()
  }

  const submitHandle = async (event) => {
    event.preventDefault()
    const [firstName, lastName, email] = event.target
    const newUser = {
      email: email.value,
      first_name: firstName.value,
      last_name: lastName.value
    }

    const resC = await axios.post('https://reqres.in/api/users', newUser) //create
    const dataC = await resC.data
    console.log('dataC: ', dataC)

    const resG = await axios.get('https://reqres.in/api/users') //get
    const dataG = await resG.data
    console.log('dataG: ', dataG)

    const resU = await axios.put(`https://reqres.in/api/users/${dataC.id}`, { //update
      email: email.value,
      first_name: 'ROUT',
      last_name: lastName.value
    })
    const dataU = await resU.data
    console.log('dataG: ', dataU)

    const resD = await axios.delete(`https://reqres.in/api/users/${dataC.id}`) //delete
    // const dataD = await resD.data
    console.log('resD: ', resD.status)

    clearValue()
  }



  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type={'text'} name={'firstName'} placeholder="First Name" {...firstName.inputValue }/>
        <input type={'text'} name={'lastName'} placeholder="Last Name" {...lastName.inputValue } />
        <input type={'email'} name={'email'} placeholder="Email" {...email.inputValue }/>
        <button type="submit">Create new user</button>
        <hr/>
      </form>
    </div>
  )
}

export default ModalWindow