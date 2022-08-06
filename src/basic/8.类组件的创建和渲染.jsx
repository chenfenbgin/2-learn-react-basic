import React from "react";

class HelloComponent extends React.Component {
  clickHandler = () => {
    console.log("事件被触发了");
  };

  render() {
    return <div onClick={this.clickHandler}>类组件的创建和渲染</div>;
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
