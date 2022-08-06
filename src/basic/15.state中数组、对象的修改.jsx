import React from "react";

class Counter extends React.Component {
  // 定义组件状态
  state = {
    count: 0,
    list: [1, 2, 3, 4, 5],
    person: {
      name: "chen",
      age: 25,
    },
  };

  // class Filed方法 没有this的问题
  // react不能直接修改状态 setState
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      // 数组的修改
      // list: [...this.state.list, 6, 7, 8],
      // 对象的修改
      person: {
        ...this.state.person,
        name: "狠人大帝",
      },
      // 数组的删除 - filter, 过滤掉后，新的数组再交给list
      list: this.state.list.filter((item) => item !== 3),
    });
  };

  // 产出UI模板结构
  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>{this.state.person.name}</div>
        <div>
          {this.state.count}
          <button onClick={this.clickHandler}>+</button>
        </div>
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
