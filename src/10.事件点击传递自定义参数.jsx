import React from "react";

// 如何传递自定义参数？
// 1. 只需要一个额外参数 {this.clickHandler} -> {() => {this.clickHandler}}
// 2. 既需要e，也需要额外的参数， {(e) => clickHandler(e, '额外的参数')}
class HelloComponent extends React.Component {
  clickHandler = (e, msg) => {
    console.log("事件被触发了", e, msg);
  };

  // 2、必须提供render函数
  render() {
    return (
      <div
        onClick={(e) => {
          this.clickHandler(e, "this is msg");
        }}
      >
        click me
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
