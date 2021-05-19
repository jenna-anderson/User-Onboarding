import logo from './logo.svg';
import './App.css';
import Form from './Form'
import User from './User'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(setFormValues(initialFormValues))
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser)
  }

 

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map(user => {
        return(
          <User details={user} />
        )
      })}
    </div>
  );
}

export default App;
