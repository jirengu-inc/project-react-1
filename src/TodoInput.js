import React, { Component } from 'react';

export default class TodoInput extends Component {
  render(){
    return <input type="text" defaultValue={this.props.content}
      onKeyPress={this.submit.bind(this)}/>
  }
  submit(e){
    if (e.key === 'Enter') {
      this.props.onSubmit.call()
    }
  }
}

