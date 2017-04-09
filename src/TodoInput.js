import React, { Component } from 'react';

export default class TodoInput extends Component {
  render(){
    return <input type="text" value={this.props.content}
      onChange={this.changeTitle.bind(this)}
      onKeyPress={this.submit.bind(this)}/>
  }
  submit(e){
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
  changeTitle(e){
    this.props.onChange(e)
  }
}

