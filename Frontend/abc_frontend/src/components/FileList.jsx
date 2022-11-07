import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import jwt_decord from 'jwt-decode'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginUser: localStorage.getItem('token'),
      permissions: jwt_decord(localStorage.getItem('token')).authorities,
      file_list: [],
      title: '',
      addedby: '',
      file: '',
      message: '',
      canAdd: '',
    }
  }
  componentDidMount() {
    if (this.state.loginUser) {
      axios.get('https://localhost:443/api/v1/file/get/all').then((res) => {
        this.setState({ file_list: res.data })
      })

      let length = this.state.permissions.length
      for (let index = 0; index < length; index++) {
        if (this.state.permissions[index].authority == 'Save file') {
          this.state.canAdd = true
          // console.log(this.state.permissions[index].authority)
          // console.log(this.state.canAdd)
        }
      }
    } else {
      this.props.history.push('/')
    }
  }

  viewmessage = (e, id) => {
    e.preventDefault()
    this.setState({
      message: '',
      title: '',
      addedby: '',
      file: '',
    })
    axios.get('https://localhost:443/api/v1/file/get/' + id).then((res) => {
      if (res.data.hasOwnProperty('message')) {
        this.setState({
          message: res.data.message,
          title: 'Data Is Tampered',
        })
        console.log(res.data)
      } else {
        this.setState({
          title: res.data.title,
          addedby: res.data.userId,
          file: res.data.file,
        })
        console.log(res.data)
      }
    })
  }
  addFile = (e) => {
    e.preventDefault()
    this.props.history.push('/add-file')
  }
  render() {
    let contend
    if (this.state.message == '') {
      contend = (
        <div className="container">
          <div className="content">
            <div className="form-group">
              <label>Title</label>
              <input
                readOnly
                type="text"
                className="form-control mt-1"
                placeholder={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>Added By</label>
              <input
                readOnly
                type="text"
                className="form-control mt-1"
                placeholder={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>File</label>
            </div>
            <div className="text-center">
              <img
                src={this.state.file}
                alt=""
                srcset=""
                style={{
                  width: '20%',
                  height: '20%',
                  zIndex: 'revert',
                }}
              />
            </div>
          </div>
        </div>
      )
    } else {
      contend = (
        <h5>
          Data is modified by third party. <br />
          So please add a complaine regarding the issue.
        </h5>
      )
    }
    let button
    if (this.state.canAdd == true) {
      button = (
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <button
              className="btn btn-success btn-block fa fa-plus"
              onClick={(e) => this.addFile(e)}
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
            <h3 className="Auth-form-title">File List</h3>
            <div className="user_table">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Added By</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.file_list.map((message) => (
                    <tr key={message.id}>
                      <td>{message.title}</td>
                      <td>{message.userId}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-info btn-block fa fa-eye"
                          onClick={(e) => this.viewmessage(e, message.id)}
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
                  {this.state.title}
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
              <div class="modal-body">{contend}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
