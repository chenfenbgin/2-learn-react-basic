import React from "react";

// 1.this有问题的写法
class Test extends React.Component {

  // 3.解决方法一：使用bind修正this,（现在不推荐这种写法）
  // 相当于在类组件初始化的阶段，就可以把回调函数的this修正到永远指向当前组件实例对象
  constructor(){
    super();
    this.handler = this.handler.bind(this);
  }

  // 2.错误写法， 这个时候如果使用this.setState去修改数据，是会报错的
  handler() {
    console.log(this); // undefined
  }
  render() {
    return <button onClick={this.handler}>click</button>;
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
