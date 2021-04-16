import React from "react";
import PropTypes from "prop-types";

// class component는 function component와 달리 함수가 아니기 때문에, 안에 render 함수를 작성해줘야함.
// class component를 사용하는 가장 큰 이유는 state때문
// state에는 component에서 사용할 '가변적 데이터'를 저장하는 곳
// 가변적이라고해서 state 안의 데이터를 직접 변경해서는 안된다. 반드시 state 안의 변경함수를 사용하여 변경함
class App extends React.Component{
  // state 는 결국 object이다.
  state={
    count: 0
  };

  add = () =>{
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () =>{
    // setState 내에서 this.state를 사용해서 외부 데이터의 변화에 의존하는 방식은 나중에 문제가 됨
    // this.setState({count: this.state.count -1});
    this.setState(current => ({count: current.count - 1}));
  };
  render(){
    return (
      <div>
        <h1>The number : {this.state.count} </h1>
        <button onClick={this.add}> plus + </button>
        <button onClick={this.minus}> minus - </button>
      </div>
    )
  }


}

export default App;