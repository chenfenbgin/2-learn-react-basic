import React from "react";

// 1.this有问题的写法
class Test extends React.Component {
  // 3.解决方法二：不通过constructor做修正，通过箭头的写法，直接沿用父函数中的this指向也是可以的
  // 这个箭头函数的父级函数是 render()

  // 2.错误写法， 这个时候如果使用this.setState去修改数据，是会报错的
  handler() {
    console.log(this); // undefined
  }
  render() {
    // render中的this， 指向已经被react内部做了修正，就是指向当前的组件实例对象
    console.log("父级函数中的this指向- rende this ", this);
    // this修正，这种写法也是不推荐的
    return <button onClick={() => this.handler()}>click</button>;
  }
}

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
