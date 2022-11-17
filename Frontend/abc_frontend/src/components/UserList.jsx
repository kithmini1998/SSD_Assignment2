import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import jwt_decord from 'jwt-decode'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginUser: localStorage.getItem('token'),
      permissions: '',
      user_list: [],
      name: '',
      username: '',
      role: '',
      email: '',
      password: '',
      contact: '',
      occupation: '',
      rolename: '',
      canAdd: '',
    }
  }
  componentDidMount() {
    if (this.state.loginUser) {
      this.state.permissions = jwt_decord(
        localStorage.getItem('token'),
      ).authorities
      const config = {
        headers: { Authorization: `Bearer ${this.state.loginUser}` },
      }
      axios.get('https://localhost:443/api/v1/user/', config).then((res) => {
        console.log(res)
        this.setState({ user_list: res.data })
      })

      let length = this.state.permissions.length
      for (let index = 0; index < length; index++) {
        if (this.state.permissions[index].authority == 'write user') {
          this.state.canAdd = true
        }
      }
    } else {
      this.props.history.push('/')
    }
  }
  addUser = (e) => {
    e.preventDefault()
    this.props.history.push('/add-user')
  }
  viewuser = (e, id) => {
    console.log(id)
    const config = {
      headers: { Authorization: `Bearer ${this.state.loginUser}` },
    }
    axios.get('https://localhost:443/api/v1/user/' + id, config).then((res) => {
      console.log(res)
      if (res.role == '63668b623c8e99030a41bfa1') {
        this.state.rolename = 'Worker'
      } else {
        this.state.rolename = 'Manager'
      }
      this.setState({
        name: res.data.name,
        username: res.data.userName,
        role: this.state.rolename,
        email: res.data.email,
        contact: res.data.contact,
        occupation: res.data.occupation,
      })
    })
  }
  render() {
    let button
    if (this.state.canAdd == true) {
      button = (
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <button
              className="btn btn-success btn-block fa fa-plus"
              onClick={(e) => this.addUser(e)}
            ></button>
          </div>
        </div>
      )
    }
    return (
      <div>
        <Header></Header>
        <div className="user-form-container mt-5">
          <div className="around mt-5">
            {button}
            <h3 className="Auth-form-title">User List</h3>
            <div className="user_table">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Occupation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.user_list.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td>{user.occupation}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-info btn-block fa fa-eye"
                          onClick={(e) => this.viewuser(e, user.id)}
                          data-toggle="modal"
                          data-target="#exampleModal2"
                        ></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* model */}
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel">
                  {' '}
                  {this.state.name}
                </h1>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="container">
                  <div className="content">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control mt-1"
                        placeholder={this.state.name}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>User Name</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control mt-1"
                        placeholder={this.state.username}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Role</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control mt-1"
                        placeholder={this.state.role}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control mt-1"
                        placeholder={this.state.email}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Contact Number</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control mt-1"
                        placeholder={this.state.contact}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Occupation</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control mt-1"
                        placeholder={this.state.occupation}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
