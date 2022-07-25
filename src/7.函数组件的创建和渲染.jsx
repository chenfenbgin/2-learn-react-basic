// 函数组件的创建和渲染
// 1、函数组件的创建, 组件名必须大写，必须有返回值
function Hello() {
  const clickHandler = () => {
    console.log("函数中的事件被触发了");
  };
  return <div onClick={clickHandler}>Hello组件</div>;
}

// 2、渲染<Hello>组件，可以<Hello/>，也可以<Hello></Hello>

function App() {
  return (
    <div className="App">
      {/* 2.渲染hello组件 */}
      <Hello />
      <Hello></Hello>
    </div>
  );
}

export default App;
