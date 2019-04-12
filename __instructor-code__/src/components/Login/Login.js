import React, { Component } from 'react';
import logo from './communityBank.svg';
import axios from 'axios';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  async register() {
    const { email, password } = this.state;
    const res = await axios.post('/auth/register', { email, password })
    if (res.data.loggedIn) this.props.history.push('/private')
    else alert('Registration failed')
  }

  async login() {
    const { email, password } = this.state;
    const res = await axios.post('/auth/login', { email, password })
    if (res.data.loggedIn) this.props.history.push('/private')
    else alert('Login failed')
  }

  render() {
    return (
      <div className='login-container'>
        <img className='logo' src={logo} alt="bank logo" />
        <p>
          <span>Email:</span>
          <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="text" />
        </p>
        <p>
          <span>Password:</span>
          <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text" />
        </p>
        <button onClick={() => this.register()}>Register</button>
        <button onClick={() => this.login()}>Log in</button>
      </div>
    )
  }
}