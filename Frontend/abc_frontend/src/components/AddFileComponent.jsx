import React, { Component } from 'react'
import Header from './Header'

class AddFileComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '636666dac36f5209ebd52e51',
      title: '',
      role: '',
      file: '',
    }
    this.changeTitleHander = this.changeTitleHander.bind(this)
    this.changeRoleHander = this.changeRoleHander.bind(this)
    this.changefileHandler = this.changefileHandler.bind(this)
  }
  changeTitleHander = (event) => {
    this.setState({ title: event.target.value })
  }
  changeRoleHander = (event) => {
    this.setState({ role: event.target.value })
  }
  changefileHandler = (e) => {
    if (e.target.type === 'file') {
      const scope = this
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = function () {
        scope.setState({ file: reader.result })
      }
    } else {
      this.setState({ file: e.target.value })
    }
  }
  submit = (e) => {
    let object = {
      id: this.state.id,
      title: this.state.title,
      role: this.state.role,
      file: this.state.file,
    }
    console.log(this.state.file)
    console.log(object)
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Add File </h3>
              <div className="form-group mt-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Title"
                  onChange={this.changeTitleHander}
                />
              </div>
              <div className="form-group mt-3">
                <label>For</label>
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
                <label>Select a file</label>
                <input
                  type="file"
                  name="file"
                  className="form-control mt-3 mb-5"
                  placeholder="Select a file"
                  onChange={this.changefileHandler}
                />
              </div>
              <div className="d-grid gap-2 mt-3 mb-5">
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
export default AddFileComponent
