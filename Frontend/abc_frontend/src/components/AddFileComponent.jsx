import React, { Component } from 'react'

class AddFileComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
    }
    this.changefileHandler = this.changefileHandler.bind(this)
  }
  changefileHandler = (event) => {
    this.setState({ file: event.target.files[0] })
  }
  submit = (e) => {
    console.log(this.state.file)
  }
  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add File </h3>
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
    )
  }
}
export default AddFileComponent
