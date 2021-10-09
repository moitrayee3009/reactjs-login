import React from 'react'
import { Link } from 'react-router-dom'
import { LoginForm, FormGroup, Button, ContainerP } from './LoginStyles'

class Login extends React.Component {
  state = {
    userName: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleLogin = (e) => {
    const data = {
      unme: this.state.userName,
      pwd: this.state.password
    }
    e.preventDefault()
    fetch('https://minimumque.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data))
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  render() {
    return (
      <LoginForm onSubmit={this.handleLogin}>
        <FormGroup>
          <p>
            <label htmlFor='userName'>Username</label>
            <span>
              <Link to='/Retrieve'>Retrieve</Link>
            </span>
          </p>
          <input
            type='text'
            pattern='[A-Za-z0-9]{3,32}'
            name='userName'
            required
            title='Username should be alpha numeric with length 3-32.'
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <p>
            <label htmlFor='password'>Password</label>
            <span>
              <Link to='/Reset'>Reset</Link>
            </span>
          </p>

          <input
            type='password'
            name='password'
            required
            pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$'
            title='Password must contain 1 upper case char, 1 lower case char, 1 number and 1 special char. The length should be 8-32.'
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type='submit' onSubmit={this.handleLogin}>
          Login
        </Button>

        <ContainerP>
          New User? <a href='#'> Sign Up</a>
        </ContainerP>
      </LoginForm>
    )
  }
}

export default Login
