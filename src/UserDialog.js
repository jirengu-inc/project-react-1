import React, { Component } from 'react';
import './UserDialog.css'
export default class UserDialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      selected: 'signUp',
      formData: {
        username: '',
        password: '',
      }
    }
  }
  switch(e){
    this.setState({
      selected: e.target.value
    })
  }
  signUp(e){}
  signIn(e){}
  changeUsername(e){
    // this.state.formData.username = e.target.value
    // this.setState(this.state)
    // 像上面这样写会看到一个警告 warning  Do not mutate state directly. Use setState()
    let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
    stateCopy.formData.username = e.target.value
    this.setState(stateCopy)
  }
  changePassword(e){ 
    let stateCopy = JSON.parse(JSON.stringify(this.state))  // 用 JSON 深拷贝
    stateCopy.formData.password = e.target.value
    this.setState(stateCopy)
  }
  render(){
    let signUpForm = (
      <form className="signUp" onSubmit={this.signUp.bind(this)}> {/* 注册*/}
        <div className="row">
          <label>用户名</label> 
          <input type="text" value={this.state.formData.username}
            onChange={this.changeUsername.bind(this)}/>
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={this.state.formData.password} 
            onChange={this.changePassword.bind(this)}/>
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )
    let signInForm = (
      <form className="signIn" onSubmit={this.signIn.bind(this)}> {/* 登录*/}
        <div className="row">
          <label>用户名</label>
          <input type="text" value={this.state.formData.username}
            onChange={this.changeUsername.bind(this)}/>
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={this.state.formData.password}
            onChange={this.changePassword.bind(this)}/>
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
        </div>
      </form>
    ) 
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav onChange={this.switch.bind(this)}>
            <label><input type="radio" value="signUp" checked={this.state.selected === 'signUp'}/> 注册</label>
            <label><input type="radio" value="signIn" checked={this.state.selected === 'signIn'}/> 登录</label>
          </nav>
          <div className="panes">
            {this.state.selected === 'signUp' ? signUpForm : null}
            {this.state.selected === 'signIn' ? signInForm : null}
          </div>
        </div>
      </div>
    )
  }
}
