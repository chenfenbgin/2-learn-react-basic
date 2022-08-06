import React from "react";
// App 父组件     son 子组件

// 3.函数式的 Son, 需要使用props接受父组件传过来的值
function SonF(props) {
  // 10. props也是可以直接解构的
  // props是一个对象：里面存着通过父组件传入的所有数据
  console.log("props", props);

  // 9.props解构赋值，直接使用
  const { name, userInfo, getMsg, child } = props;
  console.log(name, userInfo, getMsg, child);

  // 3.1. 接受数据, props
  return (
    <div>
      我是函数子组件, {props.msg}
      list这里会被渲染成字符串，但我们需要的是遍历：
      {props.list}
      {/* 5.2 传递过来数组的渲染 */}
      <ul>
        {props.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* 6.2 传递过来的是对象 */}
      <div>{props.userInfo.name}</div>
      {/* 7. 传递过来的是函数, 其实这也是 子传父 的基础 */}
      <button onClick={props.getMsg}>触发父组件传入的函数</button>
      {/* 8. 传递过来的是jsx */}
      <div>传递过来的是jsx: {props.child}</div>
      {/* 9.解构赋值 */}
      <div>{userInfo.name}</div>
    </div>
  );
}

// 4.类组件的Son, 函数组件，需要使用this.props
class SonC extends React.Component {
  render() {
    // 4.1 接受数据： this.props
    return <div>我是类子组件, {this.props.msg}</div>;
  }
}

class App extends React.Component {
  // 1. 准备数据
  state = {
    message: "this is message",
    // 5. 传递数组
    list: [1, 2, 3, 4],

    // 6. 传递对象
    userInfo: {
      name: "狠人大帝",
      age: 25,
    },
  };

  // 7.传递一个函数
  getMsg = () => {
    console.log("父组件中的函数");
  };

  render() {
    return (
      <div>
        {/* 2. 子组件上绑定属性，属性名可以自定义->保持语义化 */}
        {/* <SonF msg={this.state.message}></SonF> */}
        {/* <SonC msg={this.state.message}></SonC> */}

        {/* 5.1 传递数组list */}
        {/* <SonF list={this.state.list}></SonF> */}

        {/* 6. 传递对象 */}
        {/* 7. 传递函数 */}
        {/* 8. 传递jsx */}
        <SonF
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
        ></SonF>
      </div>
    );
  }
}

/**
 * 注意：
   1.  props是只读对象（readonly）
    根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改

    2. props可以传递任意数据
    数字、字符串、布尔值、数组、对象、函数、JSX(react没有插槽的概念，react可以使用jsx)
 */
export default App;
