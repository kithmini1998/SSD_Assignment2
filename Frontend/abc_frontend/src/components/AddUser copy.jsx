import React, { Component } from 'react'
import Header from './Header'

class AddUser extends Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <Header></Header>
            <div className="row">
              <form>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;
                    Add User
                  </label>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <textarea
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="Enter Username"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <div className="input-group mb-3">
                      <select
                        className="custom-select"
                        name="roleId"
                        id="roleId"
                        placeholder="Role ID"
                        style={{ height: '45px', width: '100%' }}
                      >
                        <option selected>Choose Role ID...</option>
                        <option value="Research Paper Presentation">
                          Manager
                        </option>
                        <option value="Research Paper Presentation">
                          Worker
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <textarea
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <textarea
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <textarea
                      type="text"
                      name="contact"
                      id="contact"
                      placeholder="Enter Contact No"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group mb-3">
                    <textarea
                      type="text"
                      name="occupation"
                      id="occupation"
                      placeholder="Enter Occupation"
                      className="form-control"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="container mb-3">
            <div className="row">
              {/*Add Notice Button*/}
              <button type="button" className="btn btn-primary">
                <i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp; Add
                User
              </button>
            </div>
            <br />
            <div className="row">
              {/*Cancel Button*/}
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-times" aria-hidden="true"></i>&nbsp; Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddUser
