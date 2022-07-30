import React from "react";

// 需求： B组件中的数据传递给A组件

// 方案：
//    1.先把B中的数据通过子组件 传递给 父组件App
//    2.在父传子 传递给A
function SonA(props) {
  console.log("props", props);

  return <div>this is A, {props.sendAMsg}</div>;
}
function SonB(props) {
  console.log("props", props);
  // 1. 定义数据
  const bMsg = "这里来自于B的数据";

  return (
    <div>
      {/* 4. */}
      this is B <button onClick={() => props.getBMsg(bMsg)}>发送数据</button>
    </div>
  );
}
class App extends React.Component {
  // 5. 父传子
  state = {
    sendAMsg: "父传子",
  };

  // 2. 声明一个传递给B组件的方法
  getBMsg = (msg) => {
    console.log("msg", msg);
    this.setState({
      sendAMsg: msg
    })
  };
  render() {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg} />
        {/* 3. */}
        <SonB getBMsg={this.getBMsg} />
      </div>
    );
  }
}

export default App;
