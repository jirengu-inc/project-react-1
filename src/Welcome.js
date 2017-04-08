import React from 'react';
class Welcome extends React.Component {
  constructor(props){
    super(props)
    // 上面照抄，不懂的话看 MDN 
    this.state = {
      date: new Date()
    }
    setInterval(()=>{ // 搜索「JS 箭头函数 MDN」
      this.setState({
        date: new Date() // 更新 date
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
      </div>
    )
  }
}

export default Welcome
