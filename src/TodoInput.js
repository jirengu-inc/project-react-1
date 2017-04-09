import React, { Component } from 'react';

export default class TodoInput extends Component {
  render(){
    return <input type="text" defaultValue={this.props.content}
      onKeyPress={this.submit}/>
  }
  submit(e){
    if (e.key === 'Enter') {
      console.log('用户按回车了');
    }
  }
}

