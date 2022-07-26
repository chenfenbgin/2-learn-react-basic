import React from "react";

class Counter extends React.Component {
  // 1.声明用来控制input value的react组件自己的状态
  state = {
    message: "this is message",
  };

  inputChange = (e) => {
    console.log("change事件触发了", e);
    // 4. 拿到输入框最新的值，交给message
    this.setState({
      message: e.target.value,
    });
  };

  // 产出UI模板结构
  render() {
    // 2. 给input框的value属性绑定value
    // 3. 给input框绑定一个onChange事件 ： 为了拿到当前输入框的数据
    return (
      <>
        <div>{this.state.message}</div>
        <input
          type="text"
          value={this.state.message}
          onChange={this.inputChange}
        />
      </>
    );
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
