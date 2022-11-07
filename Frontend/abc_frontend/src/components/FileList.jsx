import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

export default class FileList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message_list: ['first', 'second'],
      title: '',
      message: '',
    }
  }
  componentDidMount() {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    }
    axios.get('https://localhost:443/api/v1/file/get/all', config)
    console.log('sss')
  }
  viewmessage = (e, id) => {
    console.log(id)
    this.setState({
      title: 'title',
      message: 'message',
    })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="user-form-container mt-5">
          <div className="around mt-5">
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
                  {this.state.message_list.map((message) => (
                    <tr key={message}>
                      <td>{message}</td>
                      <td>{message}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-info btn-block fa fa-eye"
                          onClick={(e) => this.viewmessage(e, message)}
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
              <div class="modal-body">
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
                    <div className="form-group mt-3">
                      <label>Message</label>
                      <textarea
                        readOnly
                        type="text"
                        rows="7"
                        className="form-control"
                        placeholder={this.state.message}
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
