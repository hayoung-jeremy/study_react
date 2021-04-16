import React from "react";

class App extends React.Component{
  constructor(){
    console.log("1) I'm ready to be rendered ");
  };
  componentDidMount(){
    console.log("2) after render(), 3) Now, I'm rendered ");
  };
  componentDidUpdate(){
    console.log("1) after render(), 2) Now, I'm updated ");
  };
  componentWillUnmonut(){
    console.log("this is called when a component is being removed from the DOM ");
  };
  render(){
    // 매번 this.state를 사용해서 data를 가져오기보다는, ES6 문법을 사용해서 가져온다.
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }


}

export default App;