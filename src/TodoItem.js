import React, { Component } from 'react';

export default class TodoItem extends Component {
  render(){
    return (
      <div>
      <input type="checkbox" checked={this.props.todo.status === 'completed'}
        onChange={this.toggle.bind(this)}/> {this.props.todo.title}
      </div>
    )
  }
  toggle(e){
    this.props.onToggle(e, this.props.todo)
  }
}
