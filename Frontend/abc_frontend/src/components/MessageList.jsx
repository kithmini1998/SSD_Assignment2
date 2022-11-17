import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message_list: [],
      title: '',
      description: '',
    }
  }
  componentDidMount(){
    axios.get('https://localhost:443/api/v1/message/').then((res) => {
      //events2: this.state.events.filter(event => event.type !=="Workshop")
      this.setState({ message_list: res.data});
    });


  }

  viewmessage = (e, message) => {
    console.log("3333333333",message)
    this.setState({
      title: message.title,
      description: message.description,
    })
  }

  addMessage = (e) => {
    e.preventDefault()
    this.props.history.push('/add-message')
  }
  render() {
    let button
      button = (
          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-2">
              <button
                  className="btn btn-success btn-block fa fa-plus"
                  onClick={(e) => this.addMessage(e)}
              ></button>
            </div>
          </div>
      )
    return (
        <div>
          <Header></Header>
          <div className="user-form-container mt-5">
            <div className="around mt-5">
              {button}
              <h3 className="Auth-form-title">Message List</h3>
              <div className="user_table">
                <table className="table table-striped table-bordered">
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.message_list.map((message) => (
                      <tr key={message.id}>
                        <td>{message.title}</td>
                        <td>{message.description}</td>
                        <td className="text-center">
                          <button className="btn btn-info btn-block fa fa-eye" onClick={(e) => this.viewmessage(e, message)} data-toggle="modal" data-target="#exampleModal2"></button>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* model */}
          <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title" id="exampleModalLabel">
                    {' '}
                    {this.state.title}
                  </h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="container">
                    <div className="content">
                      <div className="form-group">
                        <label>Title</label>
                        <input readOnly type="text" className="form-control mt-1" placeholder={this.state.title}/>
                      </div>
                      <div className="form-group mt-3">
                        <label>Message</label>
                        <textarea readOnly type="text" rows="7" className="form-control" placeholder={this.state.description}/>
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
