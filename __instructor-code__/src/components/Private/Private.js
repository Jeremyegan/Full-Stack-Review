import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './../../ducks/userReducer'
import { Link } from 'react-router-dom';

class Private extends Component {
  componentDidMount() {
    this.props.getData()
  }

  balance() {
    return Math.floor((Math.random() + 100) * 1000)
  }
  render() {
    const { id, email } = this.props.user;
    console.log(id, email)
    return (
      <div>
        <h1>Account Summary</h1>
        <hr />
        <hr />
        <hr />
        {
          id ? (
            <div>
              <p>Account Name: Joe Blank</p>
              <p>Account Email: {email}</p>
              <p>Account ID: {id}</p>
              <p>Balance: ${this.balance()}.00</p>
              <a href="http://localhost:4000/logout">
                <button>Logout</button>
              </a>
            </div>
          ) : (
              <div>
                <p>Please log in.</p>
                <Link to='/'>
                  <button>Login</button>
                </Link>
              </div>
            )
        }
      </div>
    )
  }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(Private);