import React from "react";
// 组件状态 类组件作为演示

class TestComponent extends React.Component {
  // 1、定义组件状态
  state = {
    // 在这里可以定义各种属性 全都是当前组件的状态
    name: "cp teacher",
  };
  // 3、绑定事件，事件回调函数
  changeName = () => {
    // 4.修改state里面的状态，注意，不可以直接做赋值修改， 必须通过一个方法setState
    // this.state.name = '狠人大帝'
    this.setState({
      name: "狠人大帝",
    });
  };
  render() {
    return (
      <div>
        this is TestComponent 当 前name为： {this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    );
  }
}

/**
 * 总结：
 * 1. 编写组件其实就是编写原生js类或者函数
 * 2. 定义状态必须通过state 实例属性的方法 提供一个对象 名称是固定的，叫state
 * 3. 修改state中的任何属性 都不可以通过直接赋值，必须使用setState方法，这个方法来自于继承得到
 * 4. 这里的this，很容易出现指向问题
 */
function App() {
  // 2.使用状态
  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export default App;
