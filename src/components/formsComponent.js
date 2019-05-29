import React, { Component } from 'react'

class FormsComponent extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }
  userHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  commentHandler = event => {
    this.setState({
      comments: event.target.value
    })
  }

  topicHandler = event => {
    this.setState({
      topic: event.target.value
    })
  }

  submithandler=(event)=>{
    //   alert(`${this.state.username}`);
      console.log(this.state.username);
      event.preventDefault();
  }
  render () {
    return (
        <form onSubmit={this.submithandler}>
      <div>
        <h2> Forms Demo </h2>
        <div>
          <label> Username </label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.userHandler}
          />
        </div>
        <div>
          <label> Comments </label>
          <input
            type='textarea'
            value={this.state.comments}
            onChange={this.commentHandler}
          />
        </div>
        <div>
          <label> Topics </label>
          <select value={this.state.topic} onChange={this.topicHandler}>
            <option value='React'>React</option>
            <option value='Vue'>Vue</option>
            <option value='Angular'>Angular</option>
          </select>
        </div>
        <div>
           <button type="submit">Submit</button>
        </div>
      </div>
      </form>
    )
  }
}
export default FormsComponent
