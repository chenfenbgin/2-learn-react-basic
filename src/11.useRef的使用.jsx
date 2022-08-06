import React, { useRef, useEffect } from "react";

// 组件实例 类组件
// dom对象 标签
class Test extends React.Component {
  state= {
    name: '天选直至'
  }
  getName = () => {
    return 'this is child test'
  }
  render() {
    return <div>我是类组件</div>;
  }
}
const App = () => {
  const testRef = useRef(null);
  const h1Ref = useRef(null);

  // 获取真实的DOM
  // useEffect回调，是在dom渲染之后执行
  useEffect(() => {
    console.log(testRef.current);
    console.log(h1Ref.current);
  }, [])
  return (
    <div>
      <Test ref={testRef} />
      <h1 ref={h1Ref}>this is h1标签</h1>
    </div>
  );
};

export default App;
