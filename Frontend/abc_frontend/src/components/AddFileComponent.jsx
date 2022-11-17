import React, { Component } from 'react'
import Header from './Header'
import { saveFile } from '../services/File'
import axios from 'axios'
import jwt_decord from 'jwt-decode'

class AddFileComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginUser: localStorage.getItem('token'),
      userId: '',
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
  componentDidMount() {
    if (this.state.loginUser) {
      this.setState({ userId: jwt_decord(this.state.loginUser).sub })
    } else {
      this.props.history.push('/')
    }
  }
  submit = (e) => {
    e.preventDefault()

    let object = {
      userId: this.state.userId,
      title: this.state.title,
      file: this.state.file,
    }
    const config = {
      headers: { Authorization: `Bearer ${this.state.loginUser}` },
    }
    if (this.state.title !== '' && this.state.file !== '') {
      axios
        .post('https://localhost:443/api/v1/file/add', object, config)
        .then((response) => {
          console.log(response)
          this.props.history.push('/file-list')
        })
        .catch((error) => {
          console.log(error)
        })
    }
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
                  required
                  className="form-control mt-1"
                  placeholder="Enter Title"
                  onChange={this.changeTitleHander}
                />
              </div>
              <div className="form-group mt-3">
                <label>Select a file</label>
                <input
                  required
                  accept=".png, .jpg, .jpeg"
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
