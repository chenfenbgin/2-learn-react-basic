// 条件渲染
// 方案：三元表达式（常用）  &&

// 1.满足条件才渲染span标签
// 2. &&
const flag = true;

function App() {
  return (
    <div className="App">
      {flag ? (
        <div>
          <span>this is span元素</span>
          {true && <div>div元素</div>}
        </div>
      ) : null}
    </div>
  );
}

export default App;
