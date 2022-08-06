// jsx 样式控制
// 1. 行内样式 - 在元素身上绑定一个style属性即可
// 2. 类名样式 - 在元素身上绑定一个className属性即可
// 3. 动态控制一下这个 active类名

import "./app.css";
const style = {
  color: "red",
  fontSize: "40px",
};
const activeFlag = true;
function App() {
  return (
    <div className="App">
      <span style={{ color: "blue", fontSize: "40px" }}>this is span </span>
      <span style={style}>this is span </span>
      <span className="active">测试类名样式 </span>
      <div className={activeFlag ? "active" : ""}>动态控制className</div>
    </div>
  );
}

export default App;
