// how react works :
// 1) App.js 에서 코드 작성 --> index.js 가 App.js 를 index.html로 전달해줌
// 또한, 이 과정에서 실제 index.html파일에 추가되지는 않지만 local에서 내가 작성한 코드를 확인 가능
// 즉, virtual DOM 을 활용하여 실시간으로 재렌더링해줌

function App() {
  return (
    <div className="App">
      hello! I am hayoung :)
    </div>
  );
}

export default App;
