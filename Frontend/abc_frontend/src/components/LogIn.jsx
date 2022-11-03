import React, { Component } from 'react'

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
  }
  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={this.changeEmailHander}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={this.changePasswordHander}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
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