import React from "react";


class HelloComponent extends React.Component {
  clickHandler = (e) => {
    e.preventDefault();
    console.log("事件被触发了", e);
  };

  render() {
    return (
      <div>
        <a onClick={this.clickHandler} href="http://www.baidu.com">
          百度
        </a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* 2.渲染hello组件 */}
      <HelloComponent />
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
