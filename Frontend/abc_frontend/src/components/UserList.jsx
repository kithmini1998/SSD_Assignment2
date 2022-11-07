import React, { Component } from 'react'
import Header from './Header'

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_list: ['name', 'sample'],
      name: '',
      username: '',
      role: '',
      email: '',
      password: '',
      contact: '',
      occupation: '',
      rolename: '',
    }
  }
  viewuser = (e, id) => {
    console.log(id)

    if (id == 'name') {
      this.state.rolename = 'Worker'
    } else {
      this.state.rolename = 'Manager'
    }
    this.setState({
      name: 'name',
      username: 'name',
      role: this.state.rolename,
      email: 'email',
      contact: 'contact',
      occupation: 'occupation',
    })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="user-form-container mt-5">
          <div className="around mt-5">
            <h3 className="Auth-form-title">User List</h3>
            <div className="user_table">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.user_list.map((user) => (
                    <tr key={user}>
                      <td>{user}</td>
                      <td>{user}</td>
                      <td>{user}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-info btn-block fa fa-eye"
                          onClick={(e) => this.viewuser(e, user)}
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
