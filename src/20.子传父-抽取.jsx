import React from "react";

// App Son
// 父传子 props 函数
// 子传父： 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可

function Son(props) {
  console.log("props", props);
  const { getSonMsg } = props;

  function clickHandler() {
    getSonMsg("这里是来自于子组件中的数据");
  }
  return (
    <div>
      this is son
      {/* 2.执行函数 */}
      <button onClick={clickHandler}>触发</button>
    </div>
  );
}
class App extends React.Component {
  state = {
    list: [1, 2, 3, 4],
  };
  // 1. 准备一个函数， 传递给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg);
  };

  render() {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}></Son>
      </div>
    );
  }
}

export default App;
