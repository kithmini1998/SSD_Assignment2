import React, { Component } from 'react'
import { loginUser } from '../services/user'

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.changeEmailHander = this.changeEmailHander.bind(this)
    this.changePasswordHander = this.changePasswordHander.bind(this)
  }

  changeEmailHander = (event) => {
    this.setState({ email: event.target.value })
  }
  changePasswordHander = (event) => {
    this.setState({ password: event.target.value })
  }
  Login = (e) => {
    console.log(this.state.email)
    console.log(this.state.password)
    let object = {
      username: this.state.email,
      password: this.state.password,
    }
    loginUser(object)
      .then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
         this.props.history.push('/add-user')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form mb-3">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={this.changeEmailHander}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1 mb-3"
                placeholder="Enter password"
                onChange={this.changePasswordHander}
              />
            </div>
            <div className="d-grid gap-2 mt-3 mb-4">
              <button
                type="button"
                onClick={this.Login}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn
