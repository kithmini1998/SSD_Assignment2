import React, { Component } from 'react'
import Header from './Header'
import { saveMessage } from '../services/Messsage'
import axios from 'axios'
class AddMessageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginUser: localStorage.getItem('token'),
      title: '',
      description: '',
    }
    this.changeTitleHander = this.changeTitleHander.bind(this)
    this.changeMessageHander = this.changeMessageHander.bind(this)
  }
  changeTitleHander = (event) => {
    this.setState({ title: event.target.value })
  }
  changeMessageHander = (event) => {
    this.setState({ description: event.target.value })
  }
  submit = (e) => {
    e.preventDefault()
    let object = {
      title: this.state.title,
      description: this.state.description,
    }
    console.log(object)
    const config = {
      headers: { Authorization: `Bearer ${this.state.loginUser}` },
    }
    //console.log(this.state.file)
    axios
      .post('https://localhost:443/api/v1/message/add', object, config)
      .then((response) => {
        console.log(response)
        this.props.history.push('/message-list')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="Auth-form-container">
          <form className="Auth-form mb-3">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Message</h3>
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
                <label>Message</label>
                <textarea
                  type="text"
                  rows="7"
                  placeholder="Enter Message Description"
                  className="form-control"
                  onChange={this.changeMessageHander}
                />
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

export default AddMessageComponent
