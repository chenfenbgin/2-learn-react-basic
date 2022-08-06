import React from "react";
// 通过类组件修改状态的方式 counter
class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0,
  };
  changeCount = () => {
    // 修改state, 不能直接赋值哈
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <button onClick={this.changeCount}>{this.state.count}click</button>;
  }
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
