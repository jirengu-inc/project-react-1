import React from 'react';
class Welcome extends React.Component {
  constructor(props){
    super(props)
    // 上面照抄，不懂的话看 MDN 
    this.state = {
      date: new Date(),
      test: '1'
    }
    this.setState({
      date: new Date(), // 更新 date
      test: 'constructor'
    })

    console.log('我已经在 constructor 里将 props 和 state 初始化好了')
  }
  componentWillMount(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentWillMount'
    })
    console.log('运行到这里的话，说明马上就要运行 render 了')
  }
  render() {
    this.setState({
      date: new Date(), // 更新 date
      test: 'render'
    })
    console.log('嗯，这里是 render')
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
        <p>{this.state.test}</p>
      </div>
    )
  }
  componentDidMount(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentDidMount'
    })
    console.log('已经挂载到页面里了')
  }
  componentWillReceiveProps(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentWillReceiveProps'
    })
  }
  shouldComponentUpdate(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'shouldComponentUpdate'
    })
  }
  componentWillUpdate(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentWillUpdate'
    })
  }
  componentDidUpdate(){
    this.setState({
      date: new Date(), // 更新 date
      test: 'componentDidUpdate'
    })
  }
  componentWillUnmount(){
    console.log('要死了')
  }

}

export default Welcome
