import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id:1, title:'第一个待办'}
      ]
    }
  }
  render() {

    let todos = this.state.todoList.map((item,index)=>{
      return <li>{item.title}</li>
    })

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          {/*注意 value= 后面不要加引号，加了你试下，会错*/}
          <input type="text" value={this.state.newTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
}

export default App;
