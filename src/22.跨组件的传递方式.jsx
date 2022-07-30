import React, { createContext } from "react";
// App -> A -> C
// App数据 -> C

// 2. 导入createContext方法并执行
const { Provider, Consumer } = createContext();
function ComA(props) {
  return (
    <div>
      this is ComA
      <ComC />
    </div>
  );
}
function ComC(props) {
  return (
    <div>
      this is ComC
      <Consumer>{(value) => <span>{value}</span>}</Consumer>
    </div>
  );
}
class App extends React.Component {
  // 1. 提供数据
  state = {
    message: "this is message",
  };
  render() {
    return (
      // 3. 使用Provider进行包裹， 通过固定的value属性进行传递
      <Provider value={this.state.message}>
        <div>
          <ComA />
        </div>
      </Provider>
    );
  }
}

export default App;
