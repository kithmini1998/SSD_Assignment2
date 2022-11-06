import React, { Component } from 'react'
import Header from './Header'

class AddMessageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      message: '',
    }
    this.changeTitleHander = this.changeTitleHander.bind(this)
    this.changeMessageHander = this.changeMessageHander.bind(this)
  }
  changeTitleHander = (event) => {
    this.setState({ title: event.target.value })
  }
  changeMessageHander = (event) => {
    this.setState({ message: event.target.value })
  }
  Submit = (e) => {
    let object = {
      title: this.state.title,
      message: this.state.message,
    }
    console.log(object)
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
                  onClick={this.Submit}
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
