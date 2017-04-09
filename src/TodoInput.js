import React, { Component } from 'react';

export default class TodoInput extends Component {
  render(){
    return <input type="text" defaultValue={this.props.content}/>
  }
}

