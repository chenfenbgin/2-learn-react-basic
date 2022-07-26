import React, { createRef } from "react";

class Input extends React.Component {
  // 1. 这个实例属性是可以自定义的 语义化即可
  msgRef = createRef();

  getValue = () => {
    // 3. 通过msgRef获取到input value 的值
    console.log(this.msgRef.current.value);
  };

  // 产出UI模板结构
  render() {
    return (
      <>
        {/* 2. ref */}
        <input type="text" ref={this.msgRef} />

        <button onClick={this.getValue}>点击获取到输入框的值</button>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
