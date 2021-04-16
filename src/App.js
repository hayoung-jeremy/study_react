
import PropTypes from "prop-types";

// how react works :
// 1) App.js 에서 코드 작성 --> index.js 가 App.js 를 index.html로 전달해줌
// 또한, 이 과정에서 실제 index.html파일에 추가되지는 않지만 local에서 내가 작성한 코드를 확인 가능
// 즉, virtual DOM 을 활용하여 실시간으로 재렌더링해줌

// 가상의 data 설정 :
const virtual_data = [
  {
    id: 0,
    name: "data_01",
    contents: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 1,
    name: "data_02",
    contents: "Voluptas deleniti natus excepturi voluptates voluptate autem dolorem culpa sequi fugiat doloremque nulla ab totam, aut facere alias, tempora ut. Totam, dolore."
  },
  {
    id: 2,
    name: "data_03",
    contents: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti natus excepturi voluptates voluptate autem dolorem culpa sequi fugiat doloremque nulla ab totam, aut facere alias, tempora ut. Totam, dolore."
  },
  {
    id: 3,
    name: "data_04",
    contents: "Voluptas deleniti natus excepturi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. voluptates voluptate autem dolorem culpa sequi fugiat doloremque nulla ab totam, aut facere alias, tempora ut. Totam, dolore."
  },
  {
    id: 4,
    name: "data_05",
    contents: "Voluptas deleniti natus excepturi voluptates voluptate autem dolorem culpa sequi fugiat doloremque nulla ab totam, aut facere alias, tempora ut. Totam, dolore."
  },
];

// props 를 활용하여 component 에서 children component 에게 정보를 보내보자
// 부모에서 정보를 자식으로 보낼꺼야
function ShowingData ({dataName, dataContents}){
  return (
    <>
      <div>
        <div>{ dataName }</div>
        <div>{ dataContents }</div>
        <hr/>
      </div>
    </>
  )
}

// 전달받은 prop이 내가 전달하고자하는 prop이 맞는지 확인하는 것 npm i prop-types 로 설치
ShowingData.propTypes = {
  dataName: PropTypes.string.isRequired,
  dataContents: PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App">
      <div>
        {/* key 의 경우, 이는 props로 전달되지 않으며, react 내부에서 사용하기 위함 */}
        {virtual_data.map(dataset => <ShowingData key={dataset.id} dataName={dataset.name} dataContents={dataset.contents} />)}
      </div>
    </div>
  );
}

export default App;