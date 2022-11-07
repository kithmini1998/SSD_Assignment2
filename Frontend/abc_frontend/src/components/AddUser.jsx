import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import jwt_decord from 'jwt-decode'

class AddUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginUser: localStorage.getItem('token'),
      name: '',
      username: '',
      role: '',
      email: '',
      password: '',
      contact: '',
      occupation: '',
    }
    this.changeNameHander = this.changeNameHander.bind(this)
    this.changeUserNameHander = this.changeUserNameHander.bind(this)
    this.changeRoleHander = this.changeRoleHander.bind(this)
    this.changeEmailHander = this.changeEmailHander.bind(this)
    this.changePasswordHander = this.changePasswordHander.bind(this)
    this.changeContactdHander = this.changeContactdHander.bind(this)
    this.changeOccupationHander = this.changeOccupationHander.bind(this)
  }
  componentDidMount() {
    if (this.state.loginUser) {
      this.setState({ userId: jwt_decord(this.state.loginUser).sub })
    } else {
      this.props.history.push('/')
    }
  }
  changeNameHander = (event) => {
    this.setState({ name: event.target.value })
  }
  changeUserNameHander = (event) => {
    this.setState({ username: event.target.value })
  }
  changeRoleHander = (event) => {
    this.setState({ role: event.target.value })
  }
  changeEmailHander = (event) => {
    this.setState({ email: event.target.value })
  }
  changePasswordHander = (event) => {
    this.setState({ password: event.target.value })
  }
  changeContactdHander = (event) => {
    this.setState({ contact: event.target.value })
  }
  changeOccupationHander = (event) => {
    this.setState({ occupation: event.target.value })
  }
  submit = (e) => {
    let object = {
      name: this.state.name,
      username: this.state.username,
      role: this.state.role,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      occupation: this.state.occupation,
    }
    if (
      this.state.name !== '' &&
      this.state.username !== '' &&
      this.state.role !== '' &&
      this.state.email !== '' &&
      this.state.password !== '' &&
      this.state.contact !== '' &&
      this.state.occupation !== ''
    ) {
      axios
        .post('https://localhost:443/api/v1/user/registration', object)
        .then((response) => {
          console.log(response)
          this.props.history.push('/user-list')
        })
        .catch((error) => {
          console.log(error)
        })
    }
    console.log(object)
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="Auth-form-container mt-5">
          <form className="Auth-form mb-3">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Add User</h3>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Name"
                  onChange={this.changeNameHander}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter User Name"
                  onChange={this.changeUserNameHander}
                />
              </div>
              <div className="form-group mt-3">
                <label>Role</label>
                <select
                  className="custom-select"
                  onChange={this.changeRoleHander}
                >
                  <option selected>Choose Role</option>
                  <option value="63668b1c3c8e99030a41bfa0">Manager</option>
                  <option value="63668b623c8e99030a41bfa1">Worker</option>
                </select>
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
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
                <div className="form-group mt-3">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Contact Number"
                    onChange={this.changeContactdHander}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Occupation</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Occupation"
                    onChange={this.changeOccupationHander}
                  />
                </div>
              </div>
              <div className="d-grid gap-2 mt-3 mb-4">
                <button
                  type="button"
                  onClick={this.submit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddUser
